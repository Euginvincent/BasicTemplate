const mongoose = require('mongoose')
const multer = require('multer');
const Rooms = require('../models/rooms')
const helper = require("../helper/helper");
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson')
const common = require('../helper/common');
const { cond } = require('lodash');

const RoomsController = () =>{

  const create = async (req,res) =>{
    try{
          const roomsInput = helper.getReqValues(req);
          console.log(roomsInput,"rooms_input===")
          const obj = {
            "roomNo" : roomsInput.roomNo,
            "category" : roomsInput.category,
            "floor" : roomsInput.floor,
            "disp_1" : roomsInput.disp_1,
            "disp_2" : roomsInput.disp_2,
            "status" : roomsInput.status
          }
          await Rooms.create(obj).then((resp) => {
                if(resp){
                  res.status(201).send({ "status": true, responsecode: 201, message: "Rooms Created Sucessfully", data: resp });
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
    const roomsInput = helper.getReqValues(req);
    let condn = {};
    
    await Rooms.find(condn).then(data => {
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
    const roomsInput = helper.getReqValues(req);   
    var condn = {}
      if(roomsInput?.id){
        condn._id = roomsInput.id
        await Rooms.findOne(condn).then(data => {
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

const deleteRooms = async (req, res) => {
  try {
    const roomsInput = helper.getReqValues(req);
    var condn = {}
      let whereCodn = {};
      if(roomsInput?.id){
        await Rooms.deleteOne(whereCodn,{$set: condn}).then(data =>{
            if (data) {
              res.status(201).send({data : data, message : "Deleted Successfully"})
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
    deleteRooms      
  }

}

module.exports = RoomsController();