const mongoose = require('mongoose');

const DB_URI = (() => {
	console.error({error: 'Database URI not set'});
	return 'db string'
});

mongoose.connect(DB_URI, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

db = mongoose.connection;

db.once('open', () => console.log('Connected to a MongoDB instance : Atlas Server'));
db.on('error', error => console.error(error));

module.exports = db;
