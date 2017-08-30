const createMatch = (req, res) => {
  let db = req.app.get('db');
  db.matches.insert(req.body)
  .then(match => res.send(match))
}

const updateMatch = (req, res) => {
  let db = req.app.get('db');
  db.matches.update(req.body)
  .then(match => res.send(match))
}

const getMatch = (req, res) => {
  let db = req.app.get('db');
  db.queries.match.getMatch([req.params.id])
  .then(match => res.send(match[0].json_build_object))
}

module.exports = {
  createMatch,
  updateMatch,
  getMatch
}
