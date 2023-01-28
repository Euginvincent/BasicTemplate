import React, { useState } from "react";
import axios from 'axios'

import ".././style.css";

const RoomType = () => {
    const [inputField, setInputField] = useState({
        roomNo: 0,
        category: "",
        roomType: "",
        floor: 0,
        disp_1: "",
        disp_2: "",
        status: ""
    });
    const inputsHandler = (e) => {
        console.log(e.target.id,e.target.value)
        setInputField({ ...inputField,[e.target.id]: e.target.value })
    }
    //   const [state, setState] = useState({
    //     roomNo: "",
    //     category: "",
    //     roomType: "",
    //     floor: "",
    //     disp_1: "",
    //     disp_2: ""
    //   });


    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setState((prevProps) => ({
    //     ...prevProps,
    //     [name]: value
    //   }));
    // };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(inputField, "----")
              await axios.post('http://localhost:4001/api/rooms/create',{
                ...inputField
              }).then(res => {
                const { data } = res.data
              })
        }
        catch (err) {
            console.log(err)
        }
        alert(JSON.stringify(inputField))
        // console.log(event)
        // event.preventDefault();
        // console.log(state);
    };

    return (
        <>

            <form className="form-container">
                <div className="room-title">
                    <label> Room Type</label>
                </div>
                {/* roomNo: "",
        category: "",
        roomType: "",
        floor: "",
        disp_1: "",
        disp_2: "",
        status: "" */}
                <div className="container mt-5 mr-2 lg-3" >
                    <div className="form-group">
                        <label className="form-lable" >Room No : </label>
                        <input type="number"
                            className="form-control"
                            id="roomNo"
                            onChange={inputsHandler}
                            value={inputField.roomNo || ''}
                            placeholder="Room No" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Category : </label>
                        <input type="text" 
                        className="form-control" 
                        id="category" 
                        onChange={inputsHandler}
                         value={inputField.category || ''} 
                         placeholder="Category" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Room Type : </label>
                        <input type="text"
                         className="form-control" id="roomType" 
                         onChange={inputsHandler} value={inputField.roomType || ''} placeholder="Room Type" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Floor : </label>
                        <input type="number" className="form-control"
                         id="floor" onChange={inputsHandler} value={inputField.floor || ''} placeholder="Floor" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Disp_1 : </label>
                        <input type="text" className="form-control"
                         id="disp_1" onChange={inputsHandler} value={inputField.disp_1 || ''} placeholder="Disp_1" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Disp_2 : </label>
                        <input type="text" className="form-control"
                         id="disp_2" onChange={inputsHandler} value={inputField.disp_2 || ''} placeholder="Disp_2" />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Status : </label>
                        <input type="text" className="form-control" 
                        id="status" onChange={inputsHandler} value={inputField.status || ''} placeholder="status" />
                    </div>

                </div>
                <div className="btn-group mt-5" >
                    <button type="submit" className="btn btn-success ml-1" onClick={handleSubmit} >Submit</button>
                    <button type="submit" className="btn btn-danger ml-3" >Cancel</button>
                </div>
            </form>
        </>

    );
}

export default RoomType