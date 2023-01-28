var mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema({
	roomNo:{type: Number},
	category:{type:String},
	roomType:{type: String},
	floor:{type: Number},
	disp_1:{type:String},
	disp_2:{type:String},
	status:{type:String}
}, {timestamps: true});


module.exports = mongoose.model("rooms", roomsSchema); 