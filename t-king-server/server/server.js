require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, authConfig = require('./../config/auth-config')
, dbConfig = require('./../config/db-config')
, app = express()
, path = require('path')
, port = process.env.PORT
, appURL = process.env.REACT_APP_BASEURL;

//-------------------------CONTROLLERS--------------------------//

const userCtrl = require('./controllers/user-controller');

//--------------------------APP SETUP---------------------------//

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret:authConfig.sessionSecret,
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

//--------------------------AUTH0-------------------------------//

passport.use(new Auth0Strategy({
    domain: authConfig.domain,
    clientID: authConfig.clientID,
    clientSecret: authConfig.clientSecret,
    callbackURL: `http://localhost:3030/auth/callback`
},  function(accessToken, refreshToken, extraParams, profile, done) {
        console.log(profile)
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
                    ''
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
    console.log('serializing', userA);
    let userB = userA;
    done(null, userB);
});

passport.deserializeUser((userB, done) => {
    console.log('deserialized')
    let userC = userB;
    done(null, userC);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', {successRedirect: `${appURL}/`}),
    (req, res) => {send(req.user)
});


//------------------------CLIENT ENDPOINTS------------------------//

app.get('/api/user', userCtrl.getUserOnSession)

//----------------------------DB/LISTEN---------------------------//

massive(dbConfig.connectionString)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => {console.log('listening on port ', port)});
    })