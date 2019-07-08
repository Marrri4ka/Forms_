import React from 'react'

class NewPost extends React.Component {

    constructor(props){
        super(props);
    } 

    
    _message = null;
    render(){
        return (
            <form action="">
               <label htmlFor="">New POst</label>
            <input
             type="text"
             id="message"
             name="message"
             ref={(input)=> {this._message=input}}/>
         
            </form>
        )
    }

}

export default NewPost;