import React from 'react'
import '../index.css'


const Home = () => {
	return (
        <>
        {/* <div className="container-fluidd"> */}
        <div className='home-status'>
                       <input type="text" style={{backgroundColor:"skyblue"}} value = "Available :"/> 
                       <input type="text" style={{backgroundColor:"skyblue"}} value = "CheckIn :"/> 
                       <input type="text" style={{backgroundColor:"skyblue"}} value = "Cleaning :"/> 
                </div>
                
           <div className='home-container' >
              
                <div>
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
            </div>
            <div style={{marginTop:"10px"}}>
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
            </div>
            <div style={{marginTop:"10px"}}>
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
            </div>
            <div style={{marginTop:"10px"}}>
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
                <input type="button" className='roombtn' value="primary" />
            </div>
          </div>
        {/* </div> */}
        
       </>
    )
}
export default Home
