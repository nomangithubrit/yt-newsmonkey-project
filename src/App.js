import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        <NavBar/>
        {/* <Routes> */}
           <div className="container">
        <News  country = 'in' category = "sports"/>
        </div>
      </div>

    
    )
  }
}



