module.exports = {
    getUserOnSession:(req, res) => {
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    },
    updateUser:(req, res) => {
        let db = req.app.get('db');
        let {username, name, email, location} = req.body;
        let id = req.user.id;
        db.queries.user.updateUser([username, name, email, location, id])
        .then(user => {
            console.log(user);
            res.status(200).send(user)
        })
    }
}