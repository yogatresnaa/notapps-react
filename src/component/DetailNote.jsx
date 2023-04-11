import React from 'react';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './ButtonDelete';
import ArchivedButton from './ArchivedButton';
import PropTypes from 'prop-types';


function NoteDetail({id, title, createdAt, body, onDelete, onArchived, unArchive, archived}){
    return(
        <>
            <div className='detail-page__title'>{title}</div>
            <div className= 'detail-page__createdAt'>{showFormattedDate(createdAt)}</div>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
            <ArchivedButton id={id} onArchived={onArchived} unArchive={unArchive} archived={archived} />
            <DeleteButton id={id} onDelete={onDelete}/>
                
            </div>
        </>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchived: PropTypes.func.isRequired,
    unArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired

}

export default NoteDetail;