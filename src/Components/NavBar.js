import React, { Component } from 'react';
import Logo from '../logo.svg'

const shading = {
  background:'radial-gradient(#1581CF , #188CDC , #106DB4 )'
}

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navBackground"  style={shading}>
        <h1 className="float-left text-white"><img src={Logo} className="App-logo" alt="logo" />Play What?!</h1>
      </nav>
    )
  }
}
