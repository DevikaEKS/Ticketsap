import React from 'react'
import "./TicketSummary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

function TicketSummary() {
  return (
    <div className='container-fluid'>
        <div className='row '>
            <h2 className='text-center my-4'>Ticket Summary</h2>
     <div className='d-flex flex-row justify-content-between my-4'>
<div className='card p-3 text-center  cardforstatus'>
    <h4>Open <FontAwesomeIcon icon={faTicket} className='text-primary'/></h4>
    <h4 className='text-dark'>0</h4>
</div>
<div className='card p-3 text-center  cardforstatus'>
  
    <h4>In Progress  <FontAwesomeIcon icon={faTicket} className='text-warning'/></h4>
    <h4 className='text-dark'>4</h4>
</div>
<div className='card p-3 text-center  cardforstatus'>
  
    <h4>Answered  <FontAwesomeIcon icon={faTicket} className='text-success'/></h4>
    <h4 className='text-dark'>7</h4>
</div>
<div className='card p-3 text-center  cardforstatus'>
   
    <h4>On Hold  <FontAwesomeIcon icon={faTicket} className=' text-info'/></h4>
    <h4 className='text-dark'>3</h4>
</div>
<div className='card p-3 text-center cardforstatus'>
   
    <h4>Closed  <FontAwesomeIcon icon={faTicket} className='text-danger'/></h4>
    <h4 className='text-dark'>23</h4>
</div>
</div>
<table className='mt-4'>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Department</th>
            <th>Service</th>
            <th>Status</th>
            <th>Contact</th>
            <th>Priority</th>
            <th>Last Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Billing Issue</td>
            <td>23</td>
            <td>2</td>
            <td>In Progress</td>
            <td>4</td>
            <td>High</td>   
            <td>33</td>
        </tr>
        <tr>
            <td>Billing Issue</td>
            <td>23</td>
            <td>2</td>
            <td>33</td>
            <td>4</td>
            <td>Low</td>
            <td>45566</td>   
        </tr>
    </tbody>
</table>
</div>
    </div>
  )
}

export default TicketSummary