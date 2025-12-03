const express=require('express')

const app = express()

app.set('view engine','ejs');
app.set('views','./views');
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','./layouts/main.ejs');

//Połączenie z bazą danycych
require('./db/db.js')

//Routingi
require('./routes/web.js')(app) // Przekaż app jako argument

module.exports = app