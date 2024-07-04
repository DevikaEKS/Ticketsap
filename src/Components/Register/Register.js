// import React from 'react'

// import "./Register.css";

// function  Register(){
//   return (
//     <div className='container'>
//     <div className="RegisterApp d-flex justify-content-center align-items-center mt-3">
//       <div className="register-card">
//         <div className="login-form">
//           <h2 className='logintxt text-center'>Internal Team Register</h2>
//           <form>  
//             <div className="form-group">
//               <label htmlFor="username">Name</label>
//               <input type="text" id="username" name="username" placeholder='Enter your email' className="form-control"/>
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-control"/>
//             </div>
//             <div className="form-group">
//               <label htmlFor="phno">Mobile Number</label>
//               <input type="text" id="phno" name="phno" placeholder="Enter your mobile Number" className="form-control" />
//             </div>
//             {/* <div className="form-group">
//               <label htmlFor="designation">Designation </label>
//               <input type="text" id="designation" name="designation" placeholder="Enter your Designation"/>
//             </div> */}
//             <div className="form-group">
//   <label htmlFor="designation">Designation</label>
//   <select className="form-control boxsize" id="designation" name="designation" >
//     <option value="">Select Designation</option>
//     <option value="designation1">Designation 1</option>
//     <option value="designation2">Designation 2</option>
//     <option value="designation3">Designation 3</option>
//     {/* Add more options as needed */}
//   </select>
// </div>
//             <div className="form-group">
//               <label htmlFor="empid">Employee_ID</label>
//               <input type="text" id="empid" name="empid" placeholder="Enter your Employee Id" className="form-control"/>
//             </div>



//             <div className="form-group button-container">
//               <button type="submit" className='rounded-3'>Register</button>
//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//     </div>
//   )
// }

// export default Register



import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phno: '',
    designation: '',
    empid: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};


    const alphabetPattern = /^[A-Za-z\s]+$/;



    //name validation
    if (!formData.empname) {
      errors.empname = 'Name is required';

    } else if (!alphabetPattern.test(formData.empname)) {
      errors.empname = 'Name must contain only letters';

    }
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else {
      // Regex for email validation
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!regex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
        isValid = false;
      }
    }

    // Phone number validation (basic 10-digit)
    if (!formData.phno) {
      newErrors.phno = 'Phone number is required';
      isValid = false;
    } else {
      // Regex for phone number validation
      const regexPhone = /^[6-9]\d{9}$/;
      if (!regexPhone.test(formData.phno)) {
        newErrors.phno = 'Invalid phone number (must be 10 digits)';
        isValid = false;
      }
    }

    //designation
    if (!formData.designation) {
      newErrors.designation = 'Designation is required';
      isValid = false;
    }
    //employeeid

    if (!formData.empid) {
      newErrors.empid = 'EmployeeId is required';
      isValid = false;
    }
    // Other validations for additional fields can be added here

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic when form is valid
      console.log('Form submitted:', formData);
      // Add your submission logic here
      alert('Form submitted successfully!');
      history('/');

    } else {
      console.log('Form has errors:', errors);
      // Optionally, you can show an error message or handle errors differently
    }
  };

  return (
    <div className='container'>
      <div className="RegisterApp d-flex justify-content-center align-items-center mt-3">
        <div className="register-card">
          <div className="login-form">
            <h2 className='logintxt text-center'>Internal Team Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Enter your name'
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="phno">Mobile Number</label>
                <input
                  type="text"
                  id="phno"
                  name="phno"
                  placeholder="Enter your mobile Number"
                  className={`form-control ${errors.phno ? 'is-invalid' : ''}`}
                  value={formData.phno}
                  onChange={handleChange}
                />
                {errors.phno && <div className="invalid-feedback">{errors.phno}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <select
                  className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Select Designation</option>
                  <option value="designation1">Designation 1</option>
                  <option value="designation2">Designation 2</option>
                  <option value="designation3">Designation 3</option>
                  {/* Add more options as needed */}
                </select>
                {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="empid">Employee ID</label>
                <input
                  type="text"
                  id="empid"
                  name="empid"
                  placeholder="Enter your Employee Id"
                  className={`form-control ${errors.empid ? 'is-invalid' : ''}`}
                  value={formData.empid}
                  onChange={handleChange}
                />
                {errors.empid && <div className="invalid-feedback">{errors.empid}</div>}
              </div>
              <div className="form-group button-container">
                <button type="submit" className='rounded-3'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;


