const mongoose = require('mongoose');
const {DATABASE} = require('../config.js')

// Połączenie z bazą danych MongoDB przy użyciu Mongoose
mongoose.connect(DATABASE)
.then(() => {
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
})
.catch((error) => {
  console.error('Błąd połączenia z MongoDB:', error);
});

// Eksportuj mongoose dla użycia w innych plikach
module.exports = mongoose;