const { Bracket } = require('../../lib/tournament')

// Create a tournament and insert players and matches into the database.
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
    var count = 0;
    db.players.insert(players.map(player => {
      player.tournament_id = tournament.id;
      player.position = ++count;
      return player;
    })).then(() => {
      var matches = []
      while (--count) {
        matches.push({tournament_id:tournament.id})
      }
      db.matches.insert(matches)
      .then(() => res.send(tournament))
    })
  })
}

// Before we can get our tournament grouped by rounds (in a multidimensional array)
// we first need to get the players and matches in the tournament.
// When we have this, we can create a new Bracket instance, and send the tournament data in the response.
const getTournament = (req, res) => {
  let db = req.app.get('db');
  db.tournaments.findOne({id:req.params.id})
  .then(tournament => {
    if (!tournament) {
      res.status(404).send({"error" : "Tournament not found"})
    } else {
      db.queries.players.getPlayers([req.params.id])
      .then(players => {
        db.matches.find({tournament_id:req.params.id}, {order:'id'})
        .then(matches => {
          var b1 = new Bracket(players, matches)
          tournament.rounds = b1.getJSON()
          res.send(tournament)
        })
      })
    }
  })
}

const getTournaments = (req, res) => {
  let db = req.app.get('db');
  db.tournaments.find()
  .then(tournaments => res.send(tournaments))
}

module.exports = {
  createTournament,
  getTournament,
  getTournaments
}
