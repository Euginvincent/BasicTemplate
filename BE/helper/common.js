const mongoose = require('mongoose')
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson')
const multer = require('multer');


const commonUtils = {

multerFileupload (uploadPath,requ,resp) {
    console.log(uploadPath)
    return new Promise((res, rej) => {


        var Storage = multer.diskStorage({
            destination: (req, file, cb) => {
          console.log(file,"file---");
           //  cb(null, path.join(__dirname, '../public/chatfile'))
           cb(null, uploadPath)
         },
         filename: (req, file, cb) => {
          cb(null, file.fieldname +".csv")
        }
       })

       console.log(Storage,"storage====")
      
       const maxSize = 1 * 1000 * 1000;
       const upload = multer({ storage: Storage ,
          limits: { fileSize: maxSize },
          fileFilter: function (req, file, cb){
          
              var filetypes = /jpeg|jpg|png|csv/;
              var mimetype = filetypes.test(file.mimetype);           
              
              if (mimetype) {
                  return cb(null, true);
              }
            
              cb("Error: File upload only supports the "
                      + "following filetypes - " + filetypes);
          
          }
            }).single("Doctorbot_questions");

        upload(requ,resp ,function(err) {
            if(err) {
                console.log("error occured")
                return rej({ status: "failed", data: err });
            }
            else {
                console.log("Success, Image uploaded!")
                return res({ status: "success"}); 
            }
        })
    });
  }

}

module.exports = commonUtils