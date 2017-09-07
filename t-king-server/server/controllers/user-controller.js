const getUserStats = (req, res) => {
  let db = req.app.get('db');
  db.queries.players.playerStats([req.params.id])
  .then(stats => {
    res.send(stats[0]);
  })
}

const getUser = (req, res) => {
  let db = req.app.get('db');
  db.users.findOne({id:req.params.id})
  .then(user => res.send(user));
}

const getUserOnSession = (req, res) => {
    req.user ?
    res.status(200).send(req.user) :
    res.status(205).send('No user on session')
}

module.exports = {
    getUserOnSession,
    getUserStats,
    getUser
}
