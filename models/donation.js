const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
	itemsCount: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	pickupDate: {
		type: Date,
		required: true
	},
	pickupTime: {
		type: String,
		required: true
	},
	foodType: {
		type: String,
		required: true
	},
	donor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	},
	agent: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	address: {
		type: String,
		//required: true
	},
	phone: {
		type: Number,
		//required: true
	},
	donorToAdminMsg: String,
	adminToAgentMsg: String,
	status: {
		type: String,
		enum: ["pending", "rejected", "accepted", "assigned", "collected"],
		required: true
	},
});

const Donation = mongoose.model("donations", donationSchema);
module.exports = Donation;