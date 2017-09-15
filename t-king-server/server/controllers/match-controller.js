const getMatch = (req, res) => {
  let db = req.app.get('db');
  db.queries.match.getMatch([req.params.id])
  .then(match => res.send(match[0].get_match))
}

module.exports = {
  getMatch
}
