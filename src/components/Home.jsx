import React from 'react';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types';






class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return(
    <div>
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to='/test'><a class="nav-link" href="#">Test <span class="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
       <Link to ='/newpost'> <a class="nav-link" href="#">New Post</a></Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input onChange={this.props.onSearch} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
      <div>
      {this.props.allmessages.map((element)=>
        <div>
       <li> {element.message}</li>
      </div>
       
      
        )}
        </div>
        </div>
     

      
  )
  }
}

Home.propTypes={
  allmessages: PropTypes.array,
  onSearch: PropTypes.func
}

export default Home;
