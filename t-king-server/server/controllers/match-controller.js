const getMatch = (req, res) => {
  let db = req.app.get('db');
  db.queries.match.getMatch([req.params.id])
  .then(match => res.send(match[0].get_match))
}

const setWinner = (req, res) => {
  let db = req.app.get('db');
  db.queries.match.setWinner([req.body.id, req.body.winner])
  .then(matches => {
    db.queries.match.getUpdatedMatches([matches[0].id, matches[1].id])
    .then(matches => res.send(matches.map(m => m.get_match)))
  });
}

module.exports = {
  getMatch,
  setWinner
}
