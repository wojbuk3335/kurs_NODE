const express=require('express')
const app = express()

// Middleware do parsowania JSON
app.use(express.json())

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