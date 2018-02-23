module.exports = {
    create: (req, res, next) => {
        const {session} = req;
        const db = req.app.get('db');
        const {username, password} = req.body;
        session.user.username = username;
        db.create_user([username, password])
        .then((id) => {
            session.user.userid = id[0].userid;
            res.status(200).send(session.user)})
        .catch(() => res.status(500).send());
        
        
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const {params} = req;

        db.read_user([params.id])
        .then((user) => res.status(200).send(user))
        .catch(() => res.status(500).send())
    }
    
}