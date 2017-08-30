const user = (req, res, next) => {
  let user = req.user
  if (user) {
    next()
  } else {
    res.status(403).send({"error":"No user on session"})
  }
}

const addUserToReq = (req, res, next) => {
  // Add a user to the request object. For development only. Do not use in production!
  req.user = {
    id: 2,
    auth0_id: 'facebook|1016497821826298',
    email: 'thevjm@gmx.com',
    profile_pic: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/18194801_956216294521118_7387746207472594409_n.jpg?oh=10c5acbca176636cdb33fef3fbeca04c&oe=5A58F94B',
    name: 'Victor Matonis',
    username: null
  }
  next()
}

const userIsCreator = (req, res, next) => {
  let db = req.app.get('db');
  db.tournaments.findOne({id:req.params.id})
  .then(tournament => {
    if (tournament.creator === req.user.id) {
      next()
    } else {
      res.status(403).send({"error":""})
    }
  })
}

module.exports = {
  user,
  addUserToReq,
  userIsCreator
}
