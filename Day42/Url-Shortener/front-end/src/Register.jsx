import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://task-sandeep-b49-10.onrender.com/register', formData);
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <center>
        <header>
          <h1>Welcome to Url Shortener</h1>
        </header>
    <div className='container'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="sr-only" htmlFor='username'>Username:</label>
                <input
                className="form-control col mr-2"
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Username'
                    onChange={handleChange}
                    value={formData.username}
                    required
                ></input>
            </div>
            <div>
                <label  className="sr-only" htmlFor='password'>Password:</label>
                <input
                 className="form-control col mr-2"
                 placeholder='Password'
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                    required
                ></input>
            </div>
            <button className="btn btn-success" type="submit">Register</button>
        </form>
    </div>
    </center>
  )
}

export default Register