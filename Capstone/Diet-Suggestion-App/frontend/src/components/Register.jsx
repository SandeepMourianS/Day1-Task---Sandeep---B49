import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import { useFormik } from 'formik';
import axios from 'axios';
import './index.css';

// const validate = values => {
//     const errors = {};
  
//     if (!values.name) {
//       errors.name = 'Required';
//     } else if (values.name.length > 10) {
//       errors.name = 'Must be 10 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//         errors.password = 'Required';
//       } else if (values.password.length > 10) {
//         errors.password = 'Must be 10 characters or less';
//       }
  
//     return errors;
//   };

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
});
// const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     validate,
//     onSubmit: values => {
//         async (e) => {
//                 e.preventDefault();
//                 try {
//                     const response = await axios.post('http://localhost:4000/api/register', values);
//                     console.log(response.data);
//                     navigate('/login');
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//     },
//   });


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:4000/api/register', formData);
        console.log(response.data);
        navigate('/login');
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className='register-container'>
        <h1>Create an Account</h1>
        {/* <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className='form-control' 
        onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        className='form-control' 
        onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className='form-control' 
        onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit">Submit</button>
    </form> */}
        <form onSubmit={handleSubmit}>
                <input type="text"
                 required 
                 id='username'
                 name='username'
                 onChange={handleChange}
                 value={formData.username}
                 className='form-control' 
                 placeholder='Username'/>

                <input type="email" 
                required 
                id='email'
                name='email'
                onChange={handleChange}
                value={formData.email}
                className='form-control' 
                placeholder='Email' />

                <input type="password" 
                required 
                id='password'
                name='password'
                onChange={handleChange}
                value={formData.password}
                className='form-control' 
                placeholder='Password'/>

                <button className='register-button btn btn-primary' type='submit'>Register Account</button>

                <div>
                    <a href="http://localhost:5173/login">Already have an account? Login!</a>
                </div>
        </form>
    </div> 
 ) 
}

export default Register