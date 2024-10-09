import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
    const {register} = useForm();
    return (
        <>
            <div>
                <label>Pls register your first name here:</label>
                <input {...register('firstName', {
                    required: "First name is required",
                    minLength: {
                        value: 2,
                        message: "First name must be at least 2 characters long"
                    }
                })} />
            </div>
            <div>
                <label>Pls register your second name here:</label>
                <input {...register('secondName', {
                    required: "Second name is required",
                    minLength: {
                        value: 2,
                        message: "Second name must be at least 2 characters long"
                    }
                })} />
            </div>
            <div>
                <label> pls enter your email here:</label>
                <input {...register('email', {
                    required: "Email is required",
                    pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Invalid email address"
                    }
                })} />
            </div>
            <div>
                <label> pls enter your password here: </label>
                <input {...register('password', {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long"
                    }
                })} />
            </div>
        </>
    );
}

export default App;
