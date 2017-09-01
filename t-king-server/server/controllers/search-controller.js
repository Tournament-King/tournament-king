const users = (req, res) => {
  let db = req.app.get('db');
  let regex = `.*${req.query.name}.*`;
  db.queries.search.user([regex])
  .then(results => res.send(results));
}

module.exports = {
  users
}
