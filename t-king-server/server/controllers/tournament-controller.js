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
    db.players.insert(players.map(player => {
      player.tournament_id = tournament.id;
      return player;
    })).then(players => {
      var matchCount = players.length-1
      var matchNum = 1
      var matchesToInsert = []
      while (players.length) {
        matchesToInsert.push({
          match_num:matchNum,
          p_match_num:matchNum + Math.ceil(((matchCount+1)-matchNum)/2),
          player1:players.shift().id,
          player2:players.shift().id,
          tournament_id:tournament.id
        })
        matchNum++;
      }
      while (matchNum < matchCount) {
        matchesToInsert.push({
          match_num:matchNum,
          p_match_num:matchNum + Math.ceil(((matchCount+1)-matchNum)/2),
          player1:null,
          player2:null,
          tournament_id:tournament.id
        })
        matchNum++;
      }
      matchesToInsert.push({
        match_num:matchNum,
        p_match_num:null,
        player1:null,
        player2:null,
        tournament_id:tournament.id
      })
      db.matches.insert(matchesToInsert)
      .then(() => res.send(tournament));
    })
  })
}

const getTournament = (req, res) => {
  let db = req.app.get('db');
  db.queries.tournament.getTournament([req.params.id])
  .then(tournament => {
    var results = tournament.map(m => m.row_to_json)
    var rounds = []
    while (results.length) {
      var nextRound = []
      while (nextRound.length < results.length) {
        nextRound.push(results.shift())
      }
      rounds.push(nextRound)
    }
    res.send(rounds)
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
