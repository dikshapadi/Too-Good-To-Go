const express = require("express");
const router = express.Router();
const Review = require("../models/reviewUs.js");


router.get("/", (req,res) => {
	res.render("home/main");
});

router.get("/home/reviewus", (req,res) => {
	res.render("home/reviewus");
});

router.post("/home/reviewus", async (req,res) => {
	try
	{
		const review = req.body.review;
		const newReview = new Review(review);
		await newReview.save();
		req.flash("success", "Review sent successfully");
		res.redirect("/home/reviewus");
	}
	catch(err)
	{
		console.log(err);
		req.flash("error", "Some error occurred on the server.")
		res.redirect("back");
	}
});

router.get("/home/aboutus", (req,res) => {
	res.render("home/aboutus");
});

module.exports = router;	
