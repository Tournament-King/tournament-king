module.exports = {
    getUserOnSession:(req, res) => {
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    }
}