import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
import { register } from '../utils/api';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/')
        }
    } 

    return (
        <section>
            <h2>Isi Form untuk mendaftar akun</h2>
            <RegisterInput register={onRegisterHandler}/>
            <p>Sudah Punya akun ?  <Link to="/">Login di sini</Link></p>
        </section>
    )

}

export default RegisterPage