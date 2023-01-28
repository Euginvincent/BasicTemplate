import React, { useState } from "react";
import axios from 'axios'
import { FormInput } from "./FormInput";
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
        
        setInputField({ ...inputField, [e.target.id]: e.target.value })
    }
    const inputprops = [
        {
            id: "roomNo",
            className: "form-control",
            type: "number",
            placeholder: "Room No",
        },
        {
            id: "category",
            className: "form-control",
            type: "text",
            placeholder: "Category"
        },
        {
            id: "roomType",
            className: "form-control",
            type: "text",
            placeholder: "Room Type"
        },
        {
            id: "floor",
            className: "form-control",
            type: "number",
            placeholder: "Floor"
        },
        {
            id: "disp_1",
            className: "form-control",
            type: "text",
            placeholder: "Disp 1"
        },
        {
            id: "disp_2",
            className: "form-control",
            type: "text",
            placeholder: "Disp 2"
        },
        {
            id: "status",
            className: "form-control",
            type: "text",
            placeholder: "Status"
        }
    ];


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(inputField, "----")
            await axios.post('http://localhost:4001/api/rooms/create', {
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
                        <FormInput
                            {...inputprops[0]}
                            // key={input.id}
                            value={inputField.roomNo || ''}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Category : </label>
                        <FormInput
                            {...inputprops[1]}
                            // key={input.id}
                            value={inputField.category || ''}
                            onChange={inputsHandler}
                        />

                    </div>
                    <div className="form-group">
                        <label className="form-lable">Room Type : </label>
                        <FormInput
                            {...inputprops[2]}
                            // key={input.id}
                            value={inputField.roomType || ''}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Floor : </label>
                        <FormInput
                            {...inputprops[3]}
                            // key={input.id}
                            value={inputField.floor || ''}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Disp_1 : </label>
                        <FormInput
                            {...inputprops[4]}
                            // key={input.id}
                            value={inputField.disp_1 || ''}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Disp_2 : </label>
                        <FormInput
                            {...inputprops[5]}
                            // key={input.id}
                            value={inputField.disp_2 || ''}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-lable">Status : </label>
                        <FormInput
                            {...inputprops[6]}
                            // key={input.id}
                            value={inputField.status || ''}
                            onChange={inputsHandler}
                        />
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