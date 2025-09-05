const mongoose = require("mongoose");

const dbConnection = () => {
	mongoose
		.connect(process.env.DB_URI)
		.then((conn) => {
			console.log("connected succesfuly");
		})
		.catch((err) => {
			console.error(`connection failed: ${JSON.stringify(err)}`);
			// process.exit(1);
		});
};

module.exports = dbConnection;
