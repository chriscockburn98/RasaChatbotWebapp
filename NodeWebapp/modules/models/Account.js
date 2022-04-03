const mongoose = require('mongoose');
const db = require('../../config/mongodb_chatbotdb_connection.js');

const accountSchema = new mongoose.Schema ({
  username: String,
  password: String,
  accountType: String
});

const Account = db.model('Account', accountSchema);

module.exports = Account
