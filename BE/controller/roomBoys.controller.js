const mongoose = require('mongoose')
const multer = require('multer');
const RoomBoys = require('../models/roomBoys')
const helper = require("../helper/helper");
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson')
const common = require('../helper/common');
const { cond } = require('lodash');

const RoomBoysController = () =>{

  const create = async (req,res) =>{
    try{
          const RoomBoysInput = helper.getReqValues(req);
          console.log(RoomBoysInput,"rooms_input===")
          const obj = {
            "name" : RoomBoysInput.name,
            "mobile" : RoomBoysInput.mobile,
            "address" : RoomBoysInput.address,
            "designation" : RoomBoysInput.designation
            // "status" : RoomBoysInput.status
          }
          await RoomBoys.create(obj).then((resp) => {
                if(resp){
                  res.status(201).send({ "status": true, responsecode: 201, message: "RoomBoys Created Sucessfully", data: resp });
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
    const RoomBoysInput = helper.getReqValues(req);
    let condn = {};
    
    await RoomBoys.find(condn).then(data => {
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
    const RoomBoysInput = helper.getReqValues(req);   
    var condn = {}
      if(RoomBoysInput?.id){
        condn._id = RoomBoysInput.id
        await RoomBoys.findOne(condn).then(data => {
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
    const RoomBoysInput = helper.getReqValues(req);
    var condn = {}
      let whereCodn = {};
      if(RoomBoysInput?.id){
        await RoomBoys.updateOne(whereCodn,{$set: condn}).then(data =>{
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

module.exports = RoomBoysController();