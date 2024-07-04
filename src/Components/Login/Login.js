
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  //   const [showModal, setShowModal] = useState(false);
  //   const history = useNavigate();

  //   const handleShow = () => setShowModal(true);
  //   const handleClose = () => setShowModal(false);

  //   const handleClientRegister = () => {
  //     setShowModal(false);
  //     history('/clientRegister');
  //   };
  //   const handleEmployeeRegister=()=>{
  //     setShowModal(false);
  //     history('/register');
  //  };

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  let move = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(identifier, password)
    axios.post("http://192.168.15.97:5000/api/auth/login", { identifier, password })
      .then(res => {
        console.log(res.data)
        const client = res.data.client_id
        const member = res.data.int_id
        if (res.data.client_id) {
          move(`/clientdashboard/${btoa(client)}`)
        } 
        else if (res.data.designation_id === 2) {
          move(`/memberdashboard/${btoa(member)}`)
        }
      })

  }
  return (
    <div className='container loginbg'>
      <div className=' bg-light p-5 rounded-4'>
        <form onSubmit={handleSubmit}>
          <h1 className='logintxt text-center'>Login</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setIdentifier(e.target.value)} name="username" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Enter a strong password" />
          </div>
          <div className="form-group button-container">
            <button type="submit" className="rounded-3">Login</button>
          </div>
          {/* <p>Don't have an account? <span className="register-link text-primary" onClick={handleShow} >Register</span></p> */}
        </form>
      </div>
      {/* <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h3>Select the Usertype</h3>
          <Button variant="primary" className="m-2" onClick={handleClientRegister}>
            Client
          </Button>
          <Button variant="primary" className="m-2" onClick={handleEmployeeRegister}>
            Internal Employee
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Login;

