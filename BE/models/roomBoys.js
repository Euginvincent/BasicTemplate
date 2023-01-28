var mongoose = require("mongoose");

const roomBoysSchema = new mongoose.Schema({
	name:{type: String},
	mobile:{type:Number},
	address:{type: String},
	designation:{type: String},
	status:{type:Boolean, default:true}
}, {timestamps: true});


module.exports = mongoose.model("roomBoys", roomBoysSchema); 