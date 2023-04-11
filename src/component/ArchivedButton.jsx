import React from 'react';
import { FaArchive } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function ArchivedButton({id, onArchived, unArchive,archived}){
    const navigate = useNavigate()
    return(

        <div>
            {
                archived === false ? <button className='action' onClick={() =>{onArchived(id);navigate('/arsip') }}><FaArchive/></button> 
                :<button className='action' onClick={() =>{unArchive(id);navigate('/') }}><FaArchive/></button>

            }
             


        </div>
       
       
    )
    
}

ArchivedButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchived: PropTypes.func.isRequired,
    unArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired
    



}

export default ArchivedButton;