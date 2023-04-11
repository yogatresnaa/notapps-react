import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FaRegTrashAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';


function DeleteButton({id, onDelete}){
    const navigate = useNavigate()
    return(
        <button className='action' onClick={() =>{
            onDelete(id);
            alert('yakin mau d hapus?')
            navigate('/');
        }}><FaRegTrashAlt/></button>
       
    )
    
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton;