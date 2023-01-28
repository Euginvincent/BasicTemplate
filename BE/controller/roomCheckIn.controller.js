const mongoose = require('mongoose')
const multer = require('multer');
const RoomCheckIn = require('../models/roomCheckIn')
const helper = require("../helper/helper");
const common = require('../helper/common');
const { cond } = require('lodash');

const RoomCheckInController = () =>{

  const create = async (req,res) =>{
    console.log("roomcheckincontroller")
    try{
          const RoomCheckInInput = helper.getReqValues(req);
          console.log(RoomCheckInInput,"rooms_input===")
          const obj = {
            "roomNo" : RoomCheckInInput.roomNo,
            "checkInDate" : RoomCheckInInput.checkInDate,
            "checkInTime" : RoomCheckInInput.checkInTime,
            "name1" : RoomCheckInInput.name1,
            "name2" : RoomCheckInInput.name2,
            "mobile" : RoomCheckInInput.mobile,
            "phone" : RoomCheckInInput.phone,
            "company" : RoomCheckInInput.company,
            "address" : RoomCheckInInput.address,
            "city" : RoomCheckInInput.city,
            "state" : RoomCheckInInput.state,
            "zip" : RoomCheckInInput.zip,
            "country" : RoomCheckInInput.country,
            "purpose" : RoomCheckInInput.purpose,
            "roomType" : RoomCheckInInput.roomType,
            "days" : RoomCheckInInput.days,
            "male" : RoomCheckInInput.male,
            "female" : RoomCheckInInput.female,
            "child" : RoomCheckInInput.child,
            "rent" : RoomCheckInInput.rent,
            "extraPerson" : RoomCheckInInput.extraPerson,
            "extraAmount" : RoomCheckInInput.extraAmount,
            "advance" : RoomCheckInInput.advance,
            "updateAdvance" : RoomCheckInInput.updateAdvance,
            "gst" : RoomCheckInInput.gst,
            "cgstAmount" : RoomCheckInInput.cgstAmount,
            "sgstAmount" : RoomCheckInInput.sgstAmount,
            "payMode" : RoomCheckInInput.payMode,            
            "status" : RoomCheckInInput.status
          }
          await RoomCheckIn.create(obj).then((resp) => {
                if(resp){
                  res.status(201).send({ "status": true, responsecode: 201, message: "Room Check In Created Sucessfully", data: resp });
                } else {
                  res.status(400).send({ "status": false, responsecode: 400, message: "error" });
                }
            })
        
    }catch(err){
        console.log("Error in creation :", err);
        res.status(500).send({ "status": false, responsecode: 500, message: "Internal server error" });
    }
};

const listAll = async (req, res) => {
  try {
    const RoomCheckInInput = helper.getReqValues(req);
    let condn = {};
    
    await RoomCheckIn.find(condn).then(data => {
      if (data) {
          res.status(201).send({data : data, message : "Listed Successfully"})
      }
    })
  }
  catch (err) {
    console.log("Error in Rooms List :", err)
  }
};

const list = async (req, res) => {
  try {
    const RoomCheckInInput = helper.getReqValues(req);   
    var condn = {}
      if(RoomCheckInInput?.id){
        condn._id = RoomCheckInInput.id
        await RoomCheckIn.findOne(condn).then(data => {
            if (data) {
              res.status(201).send({data : data, message : "Listed Successfully"})
          }
          })
      }
    }catch (err) {
    console.log("Error in update :", err)
    res.status(201).send({error : err, message : "Error in update"})
  }
}

const deleteRoomBoys = async (req, res) => {
  try {
    const RoomCheckInInput = helper.getReqValues(req);
    var condn = {}
      let whereCodn = {};
      if(RoomCheckInInput?.id){
        await RoomCheckIn.updateOne(whereCodn,{$set: condn}).then(data =>{
            if (data) {
              res.status(201).send({data : data, message : "Updated Successfully"})
          }
          })
      }
    }catch (err) {
    console.log("Error in update :", err)
    res.status(201).send({error : err, message : "Error in update"})
  }
}
    
  return{
    create,
    listAll,
    list,
    deleteRoomBoys      
  }

}

module.exports = RoomCheckInController();