module.exports = {
    getUserOnSession:(req, res) => {
        // console.log(req)
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    }
}