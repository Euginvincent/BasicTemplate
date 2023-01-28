import React, { useState } from "react";
import { useHistory  } from 'react-router-dom';
import { Delete } from "react-bootstrap-icons";
import ".././style.css";

const RoomTypeList = () => {
  const [state, setState] = useState({
    roomNo: "",
    category: "",
    roomType: "",
    floor: "",
    disp_1: "",
    disp_2: ""
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
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><button type="edit" className="btn btn-success"  >Edit</button>
                <button type="delete" className="btn btn-danger ml-2"  >Delete</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td><button type="edit" className="btn btn-success"  >Edit</button>
                <button type="delete" className="btn btn-danger ml-2"  >Delete</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td><button type="edit" className="btn btn-success"  >Edit</button>
                <button type="delete" className="btn btn-danger ml-2"  >Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
        </div>

        </>
          
  );
}

export default RoomTypeList