import React, { useState } from "react";
import axios from 'axios'
import { FormInput } from "./FormInput";
import "../Master/style.css";
import { Link, useLocation, useHistory} from "react-router-dom";


const SignupPage = () => {
    const [inputField, setInputField] = useState({
        name: "",
        mobile: "",
        age: 0,
        email:"",
        address: "",
        city: "",
        state: "",
        password: "sukanyaa123"
    });
  let history = useHistory ();

    const inputsHandler = (e) => {
        
        setInputField({ ...inputField, [e.target.id]: e.target.value })
    }
    const inputprops = [
        {
            id: "name",
            className: "form-control",
            type: "text",
            placeholder: "Name",
        },
        {
            id: "mobile",
            className: "form-control",
            type: "number",
            placeholder: "Mobile"
        },
        {
            id: "age",
            className: "form-control",
            type: "number",
            placeholder: "Age"
        },
        {
            id: "email",
            className: "form-control",
            type: "text",
            placeholder: "Email"
        },
        {
            id: "address",
            className: "form-control",
            type: "text",
            placeholder: "Address"
        },
        {
            id: "city",
            className: "form-control",
            type: "text",
            placeholder: "City"
        },
        {
            id: "state",
            className: "form-control",
            type: "text",
            placeholder: "State"
        }
    ];


    const onsubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(inputField, "----")
            await axios.post('http://localhost:4001/api/signUp/create', {
                ...inputField
            }).then(res => {
                const { data } = res.data
                history.push('/');
            })
        }
        catch (err) {
            console.log(err)
        }
        // alert(JSON.stringify(inputField))
        // console.log(event)
        // event.preventDefault();
        // console.log(state);
    };

    const oncancel = async () =>{
        history.push('/');
    }

return (
    <>
        <form className="form-container">
        <div className="room-title">
            <label> Sign Up</label>
            </div>
            <div className="container mt-5 mr-2 lg-3" >
                <div className="form-group">
                <label className="form-lable" >Name : </label>
                    <FormInput
                        {...inputprops[0]}
                        // key={input.id}
                        value={inputField.name || ''}
                        onChange={inputsHandler}
                        />
                </div>
                <div className="form-group">
                <label className="form-lable">Mobile : </label>
                    <FormInput
                        {...inputprops[1]}
                        // key={input.id}
                        value={inputField.mobile || ''}
                        onChange={inputsHandler}
                    />
                </div>
                <div className="form-group">
                <label className="form-lable">Age : </label>
                    <FormInput
                        {...inputprops[2]}
                        // key={input.id}
                        value={inputField.age || ''}
                        onChange={inputsHandler}
                    />
                </div>
                <div className="form-group">
                <label className="form-lable">Email : </label>
                    <FormInput
                        {...inputprops[3]}
                        // key={input.id}
                        value={inputField.email || ''}
                        onChange={inputsHandler}
                    />
                </div>
                <div className="form-group">
                <label className="form-lable">Address : </label>
                    <FormInput
                        {...inputprops[4]}
                        // key={input.id}
                        value={inputField.address || ''}
                        onChange={inputsHandler}
                    />
                </div>
                <div className="form-group">
                <label className="form-lable">City : </label>
                    <FormInput
                        {...inputprops[5]}
                        // key={input.id}
                        value={inputField.city || ''}
                        onChange={inputsHandler}
                    />
                </div>
                <div className="form-group">
                <label className="form-lable">State : </label>
                    <FormInput
                        {...inputprops[6]}
                        // key={input.id}
                        value={inputField.state || ''}
                        onChange={inputsHandler}
                    />
                </div>
        </div>
      
      <div className="btn-group mt-5" >
          <button type="submit" className="btn btn-success ml-1" onClick={onsubmit} >Create</button>
          <button type="submit" className="btn btn-danger ml-3" onClick={oncancel} >Cancel</button>
      </div>
    </form>
        </>

    );
}

export default SignupPage