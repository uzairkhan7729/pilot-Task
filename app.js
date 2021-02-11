const express = require('express')
const jwt = require('jsonwebtoken');
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./model/User')
const passportJWT = require("passport-jwt");
const app = express()
var morgan = require('morgan')


//routes
var Account = require('./routes/Account');

require('./config/Passport')

signToken = user => {
  return jwt.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, 'itsscretkey');
}


mongoose.connect("mongodb://localhost/pilotDb", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
  console.log('Connected to Mongo');
}).on('error', function (err) {
  console.log('Mongo Error', err);
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('I am up ..')
})
app.use(morgan('combined'))
app.use('/Account', Account);

app.listen(3000, () => {
  console.log('Serve is up and running at the port 3000')
})