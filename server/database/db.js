const mongoose = require("mongoose");
const db = require('./default.json').mongoURI;

// mongoose is a library that creates a connection between node and mongodb


const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(db, { useNewUrlParser: true, });
		console.log('MongoDB is Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};


module.exports = connectDB;
