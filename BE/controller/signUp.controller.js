const mongoose = require('mongoose')
const multer = require('multer');
const SignUp = require('../models/signUp')
const helper = require("../helper/helper");
const common = require('../helper/common');
const { cond } = require('lodash');

const SignUpController = () =>{

  const create = async (req,res) =>{
    try{
          const signUpInput = helper.getReqValues(req);
          console.log(signUpInput,"loginInput===")
          const obj = {
            "name" : signUpInput.name,
            "mobile" : signUpInput.mobile,
            "age" : signUpInput.age,
            "email" : signUpInput.email,
            "address" : signUpInput.address,
            "city" : signUpInput.city,
            "state" : signUpInput.state,
            "status": true
          }
          await SignUp.create(obj).then((resp) => {
                if(resp){
                  res.status(201).send({ "status": true, responsecode: 201, message: "User Created Sucessfully", data: resp });
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
    const signUpInput = helper.getReqValues(req);
    let condn = {};
    
    await SignUp.find(condn).then(data => {
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
    const signUpInput = helper.getReqValues(req);   
    var condn = {}
      if(signUpInput?.id){
        condn._id = signUpInput.id
        await SignUp.findOne(condn).then(data => {
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

const deleteUser = async (req, res) => {
  try {
    const signUpInput = helper.getReqValues(req);
    var condn = {}
      let whereCodn = {};
      if(signUpInput?.id){
        await SignUp.deleteOne(whereCodn,{$set: condn}).then(data =>{
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

const login = async (req, res) => {
  try {
    const signUpInput = helper.getReqValues(req);
    let condn = {};
    condn = {
      email: signUpInput.email,
      password: signUpInput.password
    }
    await SignUp.find(condn).then(data => {
      if (data) {
        res.status(201).send({ data: data, message: "Listed Successfully" })
      }
    })
      .catch((err) => {
        res.status(400).send({ data: "", message: "No user found" })

      })
  }
  catch (err) {
    console.log("Error in List :", err)
  }
};
    
  return{
    create,
    listAll,
    list,
    deleteUser,
    login     
  }

}

module.exports = SignUpController();