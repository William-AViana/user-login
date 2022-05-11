require('dotenv').config();
const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose.connect(process.env.DB_URL)

  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Conncted to the database!'));
}

module.exports = connectToDataBase;
