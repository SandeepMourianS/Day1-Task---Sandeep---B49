import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './index.css';

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
});

const handleLogin = () => {
  navigate('/login')
}

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

    try {
      const response = await axios.get('http://localhost:4000/api/diet', formData);
      console.log(response.data);
      navigate('/login');
  } catch (error) {
      console.log(error);
  }
}
  return (
    <div className='register-container'>
        <h1>Create an Account</h1>
    
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
                  Already have an account? <a onClick={handleLogin} className='clicklogin'> Login!</a>
                </div>
        </form>
    </div> 
 ) 
}

export default Register