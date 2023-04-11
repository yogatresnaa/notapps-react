import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from "../customHook/useInput";
import {register} from '../utils/api';

function RegisterFrom() {
    const [name, handleNameChange] = useInput();
    const [email, handleEmailChange] = useInput();
    const [password, handlePasswordChange] = useInput('');
    // const [confirmPassword, handleConfirmPasswordChange] = useInput('');
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        register({name,email,password})
        navigate('/');
        alert('Data Berhasil masuk')



    }

    return (
        <form onSubmit={onSubmitHandler} className='input-register'>
            <label htmlFor="name">Nama</label>
            <input value={name} id='name' type='text' onChange={handleNameChange} />
            <label htmlFor="email">Email</label>
            <input value={email} id='email' type='email' onChange={handleEmailChange}/>
            <label htmlFor="password">Password</label>
            <input value={password} id ='password'type="password" onChange={handlePasswordChange} />
            <button type='submit'>Register</button>
           
        </form>
    )
}

export default RegisterFrom;