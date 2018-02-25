const mongoose = require('mongoose');

export function initDb() {
  mongoose.connect('mongodb://gardener:gardener@localhost:27017/gardening');

  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.on('error', err => {
    console.error(`Error while connecting to DB: ${err.message}`);
  });
  db.once('open', () => {
    console.log('DB connected successfully!');
  });
}
