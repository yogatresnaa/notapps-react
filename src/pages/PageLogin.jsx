import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../component/LoginInput';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';


function PageLogin({ loginSuccess }) {
    async function onLogin({email, password}) {
        const {error, data} = await login({email, password});

        if (!error) {
            return loginSuccess(data)
        }
    }

    return (
        <>
             <h2>Yuk, login untuk menggunakan aplikasi</h2>
                <LoginInput login={onLogin}/>
             <p>Belum punya akun ?  <Link to="/register">Daftar di sini</Link></p>
        </>
       
    )
}

PageLogin.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
  }

export default PageLogin