import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote,archiveNote, unarchiveNote } from '../utils/api';
import NoteDetail from '../component/DetailNote';
import PropTypes from 'prop-types';


function DetailPageWrapper(){
    const { id } = useParams();
    return <DetailPage id={id}/>
    
}


class DetailPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes:getNote(props.id)
        }
    };


 render(){
    if(this.state.notes === null){
        return<p>Not Found</p>
    }
    return(
        <>
         <div>
         <NoteDetail { ...this.state.notes} onDelete={deleteNote} onArchived={archiveNote} unArchive={unarchiveNote} archived={this.state.notes.archived} />
         </div>
        
        </>
    )
 }
}

DetailPage.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
   
}


export default DetailPageWrapper;