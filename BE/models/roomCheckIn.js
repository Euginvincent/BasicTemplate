var mongoose = require("mongoose");

const roomCheckInSchema = new mongoose.Schema({
	roomNo:{type: Number},
	checkInDate:{type: String},
	checkInTime:{type: String},
	name1:{type: String},
	name2:{type: String, default: null},
	mobile:{type: Number},
	phone:{type: Number, default: null},
	company:{type: String, default: null},
	address:{type: String, default: null},
	city:{type: String, default: null},
	state:{type: String, default: null},
	zip:{type:Number, default: null},
	country:{type: String, default: null},
	purpose:{type: String, default: null},
	roomType:{type: String},
	days:{type: Number},
	male:{type: Number, default: 0},
	female:{type: Number, default: 0},
	child:{type: Number, default: 0},
	rent:{type: Number},
	extraPerson:{type: Number, default: 0},
	extraAmount:{type: Number, default: 0},
	advance:{type: Number, default: 0},
	updateAdvance:{type: Number, default: 0},
	gst:{type: Number, default: 0},
	cgstAmount:{type: Number, default: 0},
	sgstAmount:{type: Number, default: 0},
	payMode:{type: String},
	status:{type:Boolean}
}, {timestamps: true});


module.exports = mongoose.model("roomCheckIn", roomCheckInSchema); 