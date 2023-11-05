import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios';

function Login({setToken}) {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleRegister = () => {
        navigate('/register');
    }
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://capstone-jvhc.onrender.com/api/login', formData);
            const { token } = response.data;
            setToken(token); // Store the token in your app.jsx state
            localStorage.setItem('token', token);
            navigate('/gender')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='login-container'>
        <h2>Sign in to your account</h2>
        <form onSubmit={handleSubmit}>

                <input type="text"
                 required 
                 id='username'
                 name='username'
                 onChange={handleChange}
                 value={formData.username}
                 className='form-control' 
                 placeholder='Username'/>

                <input type="password" 
                required 
                id='password'
                name='password'
                onChange={handleChange}
                value={formData.password}
                className='form-control' 
                placeholder='Password' />

                <button className='btn btn-primary login-button' type='submit'> Login </button>

                <div>
                    Don't have an account?<a onClick={handleRegister} className='clickRegister'> Register Here!!</a>
                </div>
        </form>
    </div>
  )
}

export default Login
