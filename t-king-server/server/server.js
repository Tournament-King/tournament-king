require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, sharedSession = require('express-socket.io-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
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

//-------------------------MIDDLEWARE--------------------------//

const authMiddleware = require('./middleware/authorization');

//--------------------------APP SETUP---------------------------//

var session = require('express-session')({
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

//--------------------------AUTH0-------------------------------//

passport.use(new Auth0Strategy({
    domain: authConfig.domain,
    clientID: authConfig.clientID,
    clientSecret: authConfig.clientSecret,
    callbackURL: `http://localhost:3030/auth/callback`
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
    passport.authenticate('auth0', {successRedirect: `${appURL}/`}),
    (req, res) => {send(req.user)
});


//------------------------CLIENT ENDPOINTS------------------------//

app.get('/api/user', userCtrl.getUserOnSession);

app.get('/api/tournament/:id', tournamentCtrl.getTournament);
app.post('/api/tournament', tournamentCtrl.createTournament);

app.get('/api/match/:id', matchCtrl.getMatch);
app.post('/api/match', matchCtrl.createMatch);
app.patch('/api/match', matchCtrl.updateMatch);


//-----------------------------SOCKETS-----------------------------//

// io.on('connection', (socket) => {
//     console.log('a user connected');

const applyMiddleware = (io) => {
    io.use(sharedSession(session, {
        autoSave:true
    }));

    io.use((socket, next) => {
        if (socket.handshake.session.passport) {
            socket.user = socket.handshake.session.passport.user
        }
        return next();
    })
}

const addListeners = (io, db) => {
    io.on('connect', (socket) => {
        console.log('user connected', socket.id);
        
        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
        
        socket.on('room', function(data) {
            socket.join(data.room)
            console.log('user joined room', data.room)
        })

        socket.on('leave room', (data) => {
            socket.leave(data.room)
            console.log('user left room', data.room)
        })

        socket.on('authorize user', (data) => {
            db.queries.match.getMatch([data.match_id])
            .then(res => {
                let {creator} = res[0].json_build_object
                if (socket.user.id === creator) {
                    socket.emit('user authorized')
                }
            })
        })

        socket.on('update score', (data) => {
            db.matches.update(data)
            .then(res => {
                let {id, player1_score, player2_score} = res;
                io.to(id).emit('score update', {
                    id,
                    player1_score,
                    player2_score
                })
            })
        })
    });
}

//----------------------------DB/LISTEN---------------------------//

massive(dbConfig.connectionString)
    .then(db => {
        app.set('db', db);
        const io = socket(app.listen(port, () => {console.log('listening on port ', port)}));
        applyMiddleware(io);
        addListeners(io, db)
    })
