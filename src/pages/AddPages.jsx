import React from 'react';
import {useNavigate} from 'react-router-dom';
import NoteInput from '../component/NoteInput';
import { addNote } from '../utils/api';


function AddNote(){
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/')
    }

    return(
        <>
            <NoteInput addNote={onAddNoteHandler}/>
        </>
    )
}

export default AddNote;