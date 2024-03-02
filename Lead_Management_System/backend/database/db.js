const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		// useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://sandeepmourian10799:sandeep@cluster0.iw0ekps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
