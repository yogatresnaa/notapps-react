import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteBody({id, title, createdAt, body }){
    return(
        <>
            <div className='note-item'>
                <NoteItem title={title} id={id} createdAt={createdAt} body={body}/>
            </div>
        </>
    )
}

NoteBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteBody;