import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';


function NoteItem({id, title, createdAt, body }){
    return(
        <>
         <div className='note-item__title'><Link to={`/detail/${id}`}>{title}</Link></div>
         <div className='note-item__createdAt'>{showFormattedDate(createdAt)}</div>
         <div className='note-item__body'>{body}</div>
        </>
       
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem