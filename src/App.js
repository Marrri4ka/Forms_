import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NewPost from './components/NewPost';
import {  Route } from 'react-router-dom'



class App extends React.Component {
  constructor(props){
    super(props);
    this.onNewCreation =this.onNewCreation.bind(this);
    this.onSearch=this.onSearch.bind(this);
  }

  state = {
    messagelist:[],
    filteredMessages:[],
  }
  onNewCreation(message){
    var newMessageList = this.state.messagelist.slice();
    newMessageList.push(message);
    this.setState({messagelist: newMessageList,filteredMessages:newMessageList});
  }

  onSearch(query){
    let filtered=this.state.messagelist.filter(m=>
      m.message.toLowerCase().startsWith(query.target.value.toLowerCase()));
      this.setState({messagelist: this.state.messagelist,filteredMessages:filtered});
  }
  

  render(){
  return (
    <div>
    
      <Route path="/newpost" render={()=>
        <NewPost onNewCreation={this.onNewCreation} />}/>
      <Route path="/" render={()=>
        <Home allmessages={this.state.filteredMessages} onSearch={this.onSearch}/>}/>


    </div>
  );
}
}

export default App;
