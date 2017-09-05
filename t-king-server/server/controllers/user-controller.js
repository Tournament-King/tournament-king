module.exports = {
    getUserOnSession:(req, res) => {
        console.log('req user:', req.user)
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    }
}