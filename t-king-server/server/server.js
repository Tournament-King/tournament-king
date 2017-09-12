require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, sharedSession = require('express-socket.io-session')
, fallback = require('express-history-api-fallback')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, logout = require('express-passport-logout')
, socket = require('socket.io')
, authConfig = require('./../config/auth-config')
, dbConfig = require('./../config/db-config')
, app = express()
, path = require('path')
, port = process.env.PORT
, appURL = process.env.REACT_APP_BASEURL;

//-------------------------CONTROLLERS--------------------------//

const userCtrl = require('./controllers/user-controller');
const matchCtrl = require('./controllers/match-controller');
const tournamentCtrl = require('./controllers/tournament-controller');
const searchCtrl = require('./controllers/search-controller');
const commentCtrl = require('./controllers/comment-controller');

//-------------------------MIDDLEWARE--------------------------//

const authMiddleware = require('./middleware/authorization');

//--------------------------APP SETUP---------------------------//

const session = require('express-session')({
  secret:authConfig.sessionSecret,
  resave:false,
  saveUninitialized:false
})

app.use(bodyParser.json());
app.use(cors());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('./public'));
app.use(express.static('./public'));

//--------------------------AUTH0-------------------------------//

passport.use(new Auth0Strategy({
    domain: authConfig.domain,
    clientID: authConfig.clientID,
    clientSecret: authConfig.clientSecret,
    callbackURL: `http://tournament-king.win/auth/callback`
},  function(accessToken, refreshToken, extraParams, profile, done) {
        let db = app.get('db');
        db.queries.user.getUserByAuthId([profile.id])  //checking to see if the user exists in our database
        .then(user => {
            if(!user[0]) {  //if not, creates a new instance and pust them on session
                let db = app.get('db');
                db.queries.user.createUserViaAuth([
                    profile.id,
                    profile.displayName,
                    profile.emails[0].value,
                    profile.picture,
                ])
                .then(user => {
                    let userCurrent = user[0]
                    return done(null, userCurrent);
                })
                .catch(err => {
                    console.log(err);
                })
            }
            else {  //if so, gets them from the database and puts them on session
                let userCurrent = user[0];
                return done(null, userCurrent);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
));

passport.serializeUser((userA, done) => {
    let userB = userA;
    done(null, userB);
});

passport.deserializeUser((userB, done) => {
    let userC = userB;
    done(null, userC);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', {successRedirect: `${appURL}/`}));

app.get('/auth/logout', logout());


//------------------------CLIENT ENDPOINTS------------------------//

app.get('/api/user', userCtrl.getUserOnSession);
app.get('/api/user/stats/:id', userCtrl.getUserStats);
app.get('/api/user/:id', userCtrl.getUser);
app.patch('/api/user', userCtrl.updateUser);

app.get('/api/tournaments', tournamentCtrl.getTournaments);
app.get('/api/tournament/:id', tournamentCtrl.getTournament);
app.post('/api/tournament', tournamentCtrl.createTournament);

app.get('/api/match/:id', matchCtrl.getMatch);
app.post('/api/match/setwinner', matchCtrl.setWinner);

app.get('/api/comments/:match_id', commentCtrl.getComments);
app.post('/api/comment', commentCtrl.createComment);

app.get('/api/search/users', searchCtrl.users);


//-----------------------------SOCKETS-----------------------------//

const applyMiddleware = (io) => {
    // io.use(sharedSession(session, {
    //     autoSave:true
    // }));
    //
    // io.use((socket, next) => {
    //     if (socket.handshake.session.passport) {
    //         socket.user = socket.handshake.session.passport.user
    //     }
    //     return next();
    // })
    io.use((socket, next) => {
        socket.user = {id: 2, name:"Victor"}
        return next();
    })
}

const addListeners = (io, db) => {
    io.on('connect', (socket) => {
        console.log(socket.id + ' connected');
        socket.on('action', (action) => {
          switch (action.type) {
            case 'server/room':
              socket.join(action.data)
              break;
            case 'server/leave room':
              socket.leave(action.data)
              break;
            case 'server/update match':
                let { id, player1_score, player2_score, tournament_id } = action.data
                    db.queries.match.updateMatch([player1_score, player2_score, id, socket.user.id])
                    .then(res => {
                        socket.to(tournament_id).emit('action', {type:'UPDATE MATCH', payload: res[0].get_match})
                    })
                break;

            case 'server/set winner':
                db.queries.match.getMatchCreator([action.data.match_id])
                .then(res => {
                    if (res[0].creator === socket.user.id) {
                        db.queries.match.setWinner([action.data.match_id, action.data.winner])
                        .then(matches => {
                            db.run('select get_match($1);select get_match($2)', [matches[0].id, matches[1].id])
                            .then(res => {
                                socket.to(action.data.tournament_id).emit('action', {type:'UPDATE MATCH', payload: res[0].get_match})
                                socket.to(action.data.tournament_id).emit('action', {type:'UPDATE MATCH', payload: res[1].get_match})
                            })
                        })
                    }
                })
                break;
          }
        })

        socket.on('disconnect', () => {
            console.log(socket.id + ' disconnected')
        });
    });
}
//----------------------------FALLBACK----------------------------//

app.use(fallback('index.html', { root: './public' }));

//----------------------------DB/LISTEN---------------------------//

massive(dbConfig.connectionString)
    .then(db => {
        app.set('db', db);
        const io = socket(app.listen(port, () => {console.log('listening on port ', port)}));
        applyMiddleware(io);
        addListeners(io, db)
    })
