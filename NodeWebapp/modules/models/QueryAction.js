const mongoose = require('mongoose');
const db = require('../../config/mongodb_chatbotdb_connection.js');

const queryActionSchema = new mongoose.Schema ({
  username: String,
  query: String,
  response_utter: String,
  date: Date,
  deviceType: String,
  isRelevant: String
});

const QueryAction = db.model('QueryAction', queryActionSchema);

module.exports = QueryAction