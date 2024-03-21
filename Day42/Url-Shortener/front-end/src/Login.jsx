import React, { useState } from 'react'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom';
import './index.css'

const Login = ({setToken}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const move = () => {
        navigate('/');
    }
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://task-sandeep-b49-10.onrender.com/api/login', formData);
            const { token } = response.data;
            setToken(token); // Store the token in your app.js state
            localStorage.setItem('token', token);
            // history.push('/protected');
            navigate('/home')
        } catch (error) {
            console.error(error.response.data.message);
        }
    }
  return (
    <div className='container'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input
                type='text'
                placeholder="Username"
                id='username'
                name='username'
                onChange={handleChange}
                value={formData.username}
                required
                className="form-control col mr-2"
            ></input>
        </div>
        <div>
            <input
            className="form-control col mr-2"
                type='password'
                placeholder="Password"
                id='password'
                name='password'
                onChange={handleChange}
                value={formData.password}
                required
            ></input>
        </div>
        <button className="btn btn-success"  type="submit">Login</button>
        <button className="btn btn-success" onClick={move}>Register</button>
    </form>
</div>
  )
}

export default Login