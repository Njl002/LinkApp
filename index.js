const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const fs = require('fs');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('./api_routes/users');
userRoutes(app, path, fs);
const messageRoutes = require('./api_routes/messages');
messageRoutes(app, path, fs);
// An api endpoint that returns all users
// app.get('/api/getUsers', (req, res) => {
//     var data = require('./json/users.json');
//     res.json(data);
//     console.log('Sent Users');
// });


//Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
