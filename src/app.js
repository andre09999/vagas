const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./router/User.router');
const usersRoute = require('./router/Users.router');

const app = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.use('/user', userRoute);
app.use('/users', usersRoute);

module.exports = app;