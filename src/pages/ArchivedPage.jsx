import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../component/SearchBar';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../component/NoteList';
import PropTypes from 'prop-types';


function ArchivedPageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <Archived defaultKeyword = {keyword} keywordChange={changeSearchParams}/>
}

class Archived extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return{
                keyword,
            }
        });
        this.props.keywordChange(keyword);
     }

    render(){

        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return(

            <>
             <div>
                <h2>Catatan Arsip</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
            </div>

            {this.state.notes.length !== 0 ? <NoteList notesList={notes}/> : <div className='notes-list-empty'><p>Belum ada catatan</p></div> }
            
            </>
        )
    }
}

Archived.propTypes = {
    defaultKeyword:PropTypes.string,
    keywordChange: PropTypes.func,

}

export default ArchivedPageWrapper;