import React, { useState } from "react";
import axios from 'axios'
import { FormInput } from "./FormInput";
import "../Master/style.css";
import { Link, useLocation, useHistory} from "react-router-dom";

const Login = () => {
  const [inputField, setInputField] = useState({
    userName: "",
    password: ""
});
  const inputsHandler = (e) => {
        
    setInputField({ ...inputField, [e.target.id]: e.target.value })
}
const inputprops = [
    {
        id: "userName",
        className: "form-control",
        type: "text",
        placeholder: "User Name",
    },
    {
        id: "password",
        className: "form-control",
        type: "text",
        placeholder: "Password"
    }
]; 
  let history = useHistory ()

  const onsubmit = async (e) => {
    try {
        e.preventDefault()
        let data  = await axios.get('http://localhost:4001/api/signUp/login',
        {
          params: {
            email: inputField?.userName,
            password: inputField?.password
          }
        })
        console.log(data)
        if(data.data.data.length!=0){
          history.push('./Home');
        }
        // return data;     
      }
    catch (err) {
        console.log(err)
    }
    // alert(JSON.stringify(inputField))
    // console.log(event)
    // event.preventDefault();
    // console.log(state);
};
 
const onsignup =async () =>{
  history.push('/SignupPage');
}
  
  return (
    <form className="form-container">
       <div className="room-title">
           <label> Login</label>
        </div>
        <div className="container mt-5 mr-2 lg-3" >
            <div className="form-group">
               <label className="form-lable" >User Name : </label>
                  <FormInput
                     {...inputprops[0]}
                      // key={input.id}
                       value={inputField.userName || ''}
                       onChange={inputsHandler}
                    />
             </div>
            <div className="form-group">
              <label className="form-lable">Password : </label>
                 <FormInput
                    {...inputprops[1]}
                     // key={input.id}
                     value={inputField.password || ''}
                      onChange={inputsHandler}
                  />
            </div>
      </div>
      
      <div className="btn-group mt-5" >
          <button type="submit" className="btn btn-success ml-1" onClick={onsubmit} >SignIn</button>
          <button type="submit" className="btn btn-danger ml-3" onClick={onsignup} >SignUp</button>
      </div>
    </form>
  );
}

export default Login
