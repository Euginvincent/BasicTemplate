const mongoose = require('mongoose')
const multer = require('multer');
const roomCategories = require('../models/roomCategories')
const helper = require("../helper/helper");
const common = require('../helper/common');
const { cond } = require('lodash');

const RoomCategoriesController = () =>{

  const create = async (req,res) =>{
    try{
          const roomCategoriesInput = helper.getReqValues(req);
          console.log(roomCategoriesInput,"rooms_input===")
          const obj = {
            "category" : roomCategoriesInput.category,
            "roomNo" : roomCategoriesInput.roomNo,
            "roomType" : roomCategoriesInput.roomType,
            "maximumPerson" : roomCategoriesInput.maximumPerson,
            "rent" : roomCategoriesInput.rent,
            "extraPerson" : roomCategoriesInput.extraPerson,
            "extraRent" : roomCategoriesInput.extraRent,
            "gst" : roomCategoriesInput.gst
          }
          await roomCategories.create(obj).then((resp) => {
                if(resp){
                  res.status(201).send({ "status": true, responsecode: 201, message: "Room Categories Created Sucessfully", data: resp });
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
    const roomCategoriesInput = helper.getReqValues(req);
    let condn = {};
    
    await roomCategories.find(condn).then(data => {
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
    const roomCategoriesInput = helper.getReqValues(req);   
    var condn = {}
      if(roomCategoriesInput?.id){
        condn._id = roomCategoriesInput?.id
        await roomCategories.findOne(condn).then(data => {
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

const deleteCategory = async (req, res) => {
  try {
    const roomCategoriesInput = helper.getReqValues(req);
    var condn = {}
      let whereCodn = {};
      if(roomCategoriesInput?.id){
        await roomCategories.deleteOne(whereCodn,{$set: condn}).then(data =>{
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
    deleteCategory      
  }

}

module.exports = RoomCategoriesController();