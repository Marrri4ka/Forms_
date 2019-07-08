import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NewPost from './components/NewPost';
import {  Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Home/>
      <Route path="/newpost" component={NewPost}/>

    </div>
  );
}

export default App;
