var mongoose = require("mongoose");

const roomCategoriesSchema = new mongoose.Schema({
	category:{type:String},
	roomNo:{type: Number},
	roomType:{type: String},
	maximumPerson:{type: Number},
	rent:{type:Number},
	extraPerson:{type:Number},
	extraRent:{type:Number},
	gst:{type:Number}
}, {timestamps: true});


module.exports = mongoose.model("roomCategories", roomCategoriesSchema); 