import React from 'react';
import NoteBody from './NoteBody';
import PropTypes from 'prop-types';


function NoteList({notesList}){
    return(
        <>
            <div className='notes-list'>
                {notesList.map((note) => (
                    <NoteBody key={note.id} {...note} />
                ))}
            </div>
        </>
    )
}

NoteList.propTypes ={
 notesList: PropTypes.array.isRequired
}

export default NoteList;