module.exports = function(req, res, next){
    const {session} = req;

    if (!session.user) {
        session.user={username: '' , userid: 0};

    }
    next();
}