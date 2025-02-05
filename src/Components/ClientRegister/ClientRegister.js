
import React, { useState } from 'react';
import "./ClientRegister.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ClientRegister() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    company_short_name: '',
    VAT_number: '',
    city: '',
    phone: '',
    state: '',
    website: '',
    email: '',
    zip_code: '',
    groups: '',
    country: '',
    currency: '',
    gst_no: '',
    street: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)

    axios.post("http://192.168.15.97:5000/api/client/register", formData)
      .then(res => {
        const clientId = res.data.clientId
        if (res.data.message === "Client created successfully and password sent via email.") {
          alert("data stored")
          const errors = validate(formData);
          setErrors(errors);

          if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);

            history(`/clientservices/${btoa(clientId)}`);
          } else {
            console.log('Form has errors:', errors);
          }
        }
        else {
          alert("server down")
        }
      })
  };

  const validate = (values) => {
    let errors = {};

    // Validate each field


    const alphabetPattern = /^[A-Za-z\s]+$/;

    // Name validation
    if (!values.company) {
      errors.company = 'Name is required';

    }
    if (!values.company_short_name) {
      errors.company_short_name = 'Name is required';

    }

    if ((!values.VAT_number) || (!values.gst_no)) {
      errors.VAT_number = 'VAT or GST Number is required';
    }
    if (!values.city) {
      errors.city = 'City is required';
    } else if (!alphabetPattern.test(values.city)) {
      errors.city = 'City must contain only letters';
    }
    if (!values.phone) {
      errors.phone = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
      errors.phone = 'Invalid phone number (must start with 6, 7, 8, or 9)';
    }
    if (!values.state) {
      errors.state = 'State is required';
    } else if (!alphabetPattern.test(values.state)) {
      errors.state = 'State must contain only letters';

    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.zip_code) {
      errors.zip_code = 'Zip Code is required';
    }
    if (!values.groups) {
      errors.groups = 'Group Name is required';
    }
    if (!values.country) {
      errors.country = 'Country is required';
    } else if (!alphabetPattern.test(values.country)) {
      errors.country = 'Country must contain only letters';

    }
    if (!values.currency) {
      errors.currency = 'Currency is required';
    }

    if (!values.street) {
      errors.street = 'Street is required';
    }
    if (!values.address) {
      errors.address = 'address is required';
    }

    return errors;
  };




  return (
    <div className='container-fluid'>
      <h2 className='logintxt text-center'>Client Registration</h2>
      <div className='d-flex justify-content-center'>
        <div className='formscard my-3 px-5'>
          <form onSubmit={handleSubmit}>
            {/* starts */}
            <div className='row'>
              <div className='col m-1'>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder='Enter your Name'
                    className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.company}
                  </div>
                </div>


                <div className="form-group">
                  <label htmlFor="company_short_name">Company Shortname</label>
                  <input
                    type="text"
                    id="company_short_name"
                    name="company_short_name"
                    placeholder='Enter your Name'
                    className={`form-control ${errors.company_short_name ? 'is-invalid' : ''}`}
                    value={formData.company_short_name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.company_short_name}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="VAT_number">VAT Number</label>
                  <input
                    type="text"
                    id="VAT_number"
                    name="VAT_number"
                    placeholder='Enter your VAT Number'
                    className={`form-control ${errors.VAT_number ? 'is-invalid' : ''}`}
                    value={formData.VAT_number}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.VAT_number}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your City"
                    className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.city}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter a Mobile Number"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.phone}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter your State"
                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.state}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="Enter your Website"
                    className={`form-control ${errors.website ? 'is-invalid' : ''}`}
                    value={formData.website}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.website}
                  </div>
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
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                </div>
              </div>

              {/* second part */}
              <div className='col m-1'>
                <div className="form-group">
                  <label htmlFor="zip_code">Zip Code</label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    placeholder="Enter your Zip Code"
                    className={`form-control ${errors.zip_code ? 'is-invalid' : ''}`}
                    value={formData.zip_code}
                    onChange={handleChange} />
                  <div className="invalid-feedback">
                    {errors.zip_code}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="groups">Group Name</label>
                  <input
                    type="text"
                    id="groups"
                    name="groups"
                    placeholder="Enter your Group Name"
                    className={`form-control ${errors.groups ? 'is-invalid' : ''}`}
                    value={formData.groups}
                    onChange={handleChange} />
                  <div className="invalid-feedback">
                    {errors.groups}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your Country"
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    value={formData.country}
                    onChange={handleChange} />
                  <div className="invalid-feedback">
                    {errors.country}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="currency">Currency</label>
                  <input
                    type="text"
                    id="currency"
                    name="currency"
                    placeholder="Enter your Currency"
                    className={`form-control ${errors.currency ? 'is-invalid' : ''}`}
                    value={formData.currency}
                    onChange={handleChange} />
                  <div className="invalid-feedback">
                    {errors.currency}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="gst_no">GST No</label>
                  <input
                    type="text"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter your GST No"
                    className={`form-control ${errors.gst_no ? 'is-invalid' : ''}`}
                    value={formData.gst_no}
                    onChange={handleChange} />
                  <div className="invalid-feedback">
                    {errors.gst_no}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Enter your Street"
                    className={`form-control ${errors.street ? 'is-invalid' : ''}`}
                    value={formData.street}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    {errors.street}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">address</label>
                  <textarea
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  <div className="invalid-feedback">
                    {errors.address}
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mb-3'>
              <button type="submit" className="btn btn-primary btn-block text-center">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientRegister;

