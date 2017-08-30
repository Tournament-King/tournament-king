const { Bracket } = require('../../lib/tournament')

// Create a tournament and insert players into the database.
// Number of players in tournament must be a power of two.
// Players will be assigned a position in the tournament, starting at 1.
const createTournament = (req, res) => {
  let db = req.app.get('db');
  const { name, type, players } = req.body;
  if (!players.length || !players.length & players.length-1 === 0) {
    res.status(400).send({"error" : "Number of players in tournament must be a power of 2"})
  }
  db.tournaments.insert({
    name,
    type,
    creator: req.user.id
  }).then(tournament => {
    var position = 1;
    db.players.insert(players.map(player => {
      player.tournament_id = tournament.id;
      player.position = position++;
      return player;
    })).then(() => res.send(tournament))
  })
}

const getTournament = (req, res) => {
  let db = req.app.get('db');
  db.players.find({tournament_id:req.params.id})
  .then(players => {
    db.matches.find({tournament_id:req.params.id})
    .then(matches => {
      let bracket = new Bracket(players, matches)
      res.send(bracket.getJSON())
    })
  })
}

module.exports = {
  createTournament,
  getTournament
}
