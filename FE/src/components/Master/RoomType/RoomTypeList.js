import React, { useState, useEffect } from "react";
import { useHistory, Link, button  } from 'react-router-dom';
import { Delete } from "react-bootstrap-icons";
import axios from "axios";
import ".././style.css";

const RoomTypeList = () => {
  const [roomTypeData, setRoomTypeData] = useState([])

  const [state, setState] = useState({
    roomNo: "",
    category: "",
    roomType: "",
    floor: "",
    disp_1: "",
    disp_2: "",
    status: ""
  });


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setState((prevProps) => ({
  //     ...prevProps,
  //     [name]: value
  //   }));
  // };
  const history = useHistory();
  // const navigate = useNavigate();
  const handleSubmit = () => {
    history.push('./RoomType');

  };

  const onRoomTypeList = async () => {
    try {
      const result = await axios.get(`http://localhost:4001/api/rooms`)
      if(result){
        setRoomTypeData(result?.data?.data)

      }
      console.log(result,"result------")
    } catch (err) {
      console.log(err)
    }
    // setIsLoading(false)
  }

  useEffect(() => {
    onRoomTypeList()
  }, [])

  const TableComponent = () => {
    console.log(roomTypeData,"roomTypeData")
    return roomTypeData?.map((roomTypeDataList) => (
      // <tr key={index.toString()}>
      <tr>
        {/* <td className="text-center">
          <input type="checkbox" className="checkbox-item"
            value={roomTypeDataList?.roomNo}
          />
        </td> */}
        <td>{roomTypeDataList?.roomNo}</td>
        <td>{roomTypeDataList?.category}</td>       
        <td>{roomTypeDataList?.roomType}</td>
        <td>{roomTypeDataList?.floor}</td>
        <td>{roomTypeDataList?.disp_1}</td>
        <td>{roomTypeDataList?.disp_2}</td>
        <td>{roomTypeDataList?.status}</td>
        <td className='edit-dlt-icon edit-icon-center' style={{ whiteSpace: 'nowrap' }}>
            <button href={`http://localhost:4001/api/rooms?id=${roomTypeDataList?._id}`} className="mr-1">
              <i className="fas fa-pen" style={{ cursor: 'pointer' }}></i>
            </button>
          </td>
      </tr>
    ))
  }

  return (
    <>  <div className="table-container"> 
           <div className="rooms-list">
                    <label> Rooms List</label>                   
            </div> 
            <div className="addRoom-btn">
                <button type="submit" className="btn btn-success" onClick={handleSubmit} >Add Rooms</button>
            </div>
        <table className="table">
            <thead className="thead">
                <tr>
                <th scope="col">Room No</th>
                <th scope="col">Category</th>
                <th scope="col">Room Type</th>
                <th scope="col">Floor</th>
                <th scope="col">Disp_1</th>
                <th scope="col">Disp_2</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            <TableComponent />
                
            </tbody>
        </table>
        </div>
        </>

  );
}

export default RoomTypeList