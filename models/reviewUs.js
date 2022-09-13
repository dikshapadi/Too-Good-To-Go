const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
});

const review = mongoose.model("review", reviewSchema);
module.exports = review;