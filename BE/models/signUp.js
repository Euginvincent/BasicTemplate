var mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
	name:{type: String},
	mobile:{type: Number},
	age:{type: Number},
	email:{type: String},
	address:{type: String},
	city:{type: String},
	state:{type: String},
	password:{type: String, default: "sukanyaa123"},
	status:{type: Boolean, default: true}
}, {timestamps: true});


module.exports = mongoose.model("signUp", signUpSchema); 