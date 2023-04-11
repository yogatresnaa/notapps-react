import React from 'react';
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import { getActiveNotes } from "../utils/local-data";
import { GrAddCircle } from 'react-icons/gr'
import PropTypes from 'prop-types';


function HomePageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword = {keyword} keywordChange={changeSearchParams}/>
}


class HomePage extends React.Component{
 constructor(props){
    super(props);

    this.state = {
        notes: getActiveNotes(),
        keyword: props.defaultKeyword || '',
        

    }
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
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
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        </div>

        {this.state.notes.length !== 0 ? <NoteList notesList={notes}/> : <div className='notes-list-empty'><p>Belum ada catatan</p></div> }

            
            <div className='action detail-page__action'>
            <Link to="/add"><GrAddCircle/></Link></div>
 
        </>
    )
}
}

HomePageWrapper.propTypes = {
    defaultKeyword:PropTypes.string,
    keywordChange: PropTypes.func
}

export default HomePageWrapper;