import React from 'react'

import "./Home.css";
function Home() {
  return (
<div classname="container-fluid  ">
  <div className='row'>
    <div className='firstparthome'>
<h1 className='text-center text-light'>SAP</h1>
    </div>
   
   

    <div className='row mt-4'>
      {/* <div className='card cardsforstatus'>
<ul>
  <li>SAP Implementation and SAP Rollout</li>
  <li>SAP Technical Services</li>
  <li>SAP MIgration</li>
  <li>SAP AMS</li>
</ul>
      </div> */}
<div className='col'>
<div className='card p-3'>
<h4>SAP Implementation</h4>
</div>
</div>


<div className='col'>
<div className='card p-3'>
<h4>SAP Implementation</h4>
</div>
</div>


<div className='col'>
<div className='card p-3'>
<h4>SAP Implementation</h4>
</div>
</div>
    </div>
  </div>

</div>
   
  )
}

export default Home