import React from 'react';
import PropTypes from 'prop-types';
import useInput from "../customHook/useInput";
import { login } from '../utils/api';


function LoginInput() {
    const [email, handleEmailChange] = useInput();
    const [password, handlePasswordChange] = useInput('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const { error, data } = await login({email, password});

        if(!error) {
            return data
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-login'>
            <label htmlFor="email">Email</label>
            <input value={email} type='email' onChange={handleEmailChange}/>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" onChange={handlePasswordChange} />
            <button type='submit'>Masuk</button>
           
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
  }

export default LoginInput;