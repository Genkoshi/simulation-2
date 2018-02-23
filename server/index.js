require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    massive = require('massive'),
    user_ctrl = require('./user_controller'),
    checkForSession = require('./middlewares/checkForSession');


const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use( checkForSession );
const port = process.env.SERVER_PORT || 4000;

app.post('/api/users', user_ctrl.create);
app.get('/api/user/:id', user_ctrl.getOne);

// const path = require('path');
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {console.log(`server is listening on port ${port}`)});
})
