import React from 'react';
import PropTypes from 'prop-types';




class NewPost extends React.Component {

    state = {
        data:{}
    }

    _message=null;

    

    constructor(props){
        super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e){
        e.preventDefault();
        this.props.onNewCreation({
            message: this._message.value

        })
    }

    
    _message = null;
    render(){
        return (
            
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="">New POst</label>
            <input
             type="text"
             id="message"
             name="message"
             ref={(input)=> {this._message=input}}/>
            <button>Add</button>
            </form>
        )
    }

}

NewPost.propTypes={
    onNewCreation: PropTypes.func
}

export default NewPost;