import React from 'react';
import "./Ticketstatus.css";
function Ticketstatus() {
  return (
    <div className='container-fluid'>
        <div className='row h-100 '>
        <h2 className='text-center text-success my-5'>TICKET STATUS</h2>
            <div className='col'>       
<div className='card py-5 px-4 firstbox'>

    <h5 className='p-2'>Department: SAP</h5>
    <h5 className='p-2'>Submitted Time: 11:45AM</h5>
    <h5 className='p-2'>Contact: Mr.Dev</h5>
    <h5 className='p-2'>Status: <span className='text-success'>Progress</span> </h5>
    <h5 className='p-2'>Priority: High </h5>
</div>
  </div>
            <div className='col'>
              <div className='card depcard px-4 py-4'>
            <div className="form-group ">
  <label htmlFor="addReply" className='text-light'>Add Reply</label>
  <textarea
    className="form-control "
    id="addReply"
    rows="3"
    placeholder="Enter your reply..."
  ></textarea>
</div>
<div className="form-group">
  <label htmlFor="attachment" className='text-light'>Choose File</label>
  <input
    type="file"
    className="form-control-file"
    id="attachment"
  />
</div>
<div className=" text-center">
  <button type="button" className="applybutton text-light">Add Reply</button>
</div>
</div>
            </div>
        </div> 
    </div>
  )
}

export default Ticketstatus





