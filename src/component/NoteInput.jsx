import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
import PropTypes from 'prop-types';


class NoteInput extends React.Component {
 constructor(props){
    super(props);

    this.state = {
        title: '',
        body: ''
    }
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitInput = this.onSubmitInput.bind(this);
 }




 onChangeTitleHandler(event){
    this.setState(() =>{
        return{
            title:event.target.value
        }
    })
 }

 onChangeBodyHandler(event){
    this.setState(() =>{
        return{
            body:event.target.value
        }
    })
 }

 onSubmitInput(event){
    this.setState(() =>{
        event.preventDefault();
        this.props.addNote(this.state)
    })
 }


 render(){
    return(
        <>
            <form className='add-new-page__input' onSubmit={this.onSubmitInput}>
                <input className='add-new-page__input__title'
                    type='text'
                    placeholder='Catatanku'
                    value={this.state.title}
                    onChange={this.onChangeTitleHandler}

                ></input>

                <input className='add-new-page__input__body'
                    type='text'
                    placeholder='Saya Sebenarnya...'
                    value={this.state.body}
                    onChange={this.onChangeBodyHandler}              
                ></input>
                <div className='add-new-page__action'>
                <button className='action'><BsCheckCircle/></button>
                
                </div>
            </form>
        </>
    )
 }
}


NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput;