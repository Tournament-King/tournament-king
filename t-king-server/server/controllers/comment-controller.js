const getComments = (req, res) => {
  let db = req.app.get('db');
  db.comments.find({match_id:req.params.match_id})
  .then(comments => res.send(comments));
}

const createComment = (req, res) => {
  let db = req.app.get('db');
  req.body.user_id = req.user.id;
  db.comments.insert(req.body)
  .then(comment => res.send(comment));
}

module.exports = {
  getComments,
  createComment
}
