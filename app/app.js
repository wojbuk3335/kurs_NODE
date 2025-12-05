const express=require('express')
const app = express()
const session = require('express-session')
var cookieParser = require('cookie-parser')
const {SESSION_SECRET_KEY} = require('./config.js')

// Middleware do parsowania JSON
app.use(express.json())
// Middleware do parsowania danych z formularzy
app.use(express.urlencoded({ extended: true }))
// Middleware do parsowania cookies
app.use(cookieParser())

app.use(session({
  secret: SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set('view engine','ejs');
app.set('views','./views');
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','./layouts/main.ejs');

//Połączenie z bazą danycych
require('./db/db.js')

//Routingi
require('./routes/api.js')(app) // API routes FIRST
require('./routes/web.js')(app) // Web routes with 404 handler LAST

module.exports = app