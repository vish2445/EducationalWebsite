const mongoose = require("mongoose");
require("dotenv").config();

const  MONGODB_URL  = "mongodb+srv://sujal2k3:E2UBkzq7KK5KT5yF@cluster0.chjyba0.mongodb.net/StudyNotionDB";

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
