import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Logo from './RideLogo2 2.png'


import BigSky from './skiMods/bigsky.js';
import Bridger from './skiMods/bridger.js';
import RedLodge from './skiMods/redlodge.js';
import Targhee from './skiMods/targhee';
import Jackson from './skiMods/jackson';
import Cooke from './skiMods/cooke';
import Bell from './skiMods/bellLake';
import Beaver from './skiMods/beaver';

import Resorts from './divide/resorts';
import Backcountry from './divide/backcountry';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="snow">
          <div className="App">
       

             
              <ul class="links">
                <NavLink to="/" exact activeStyle={
                  { color: 'red' }
                } >Home</NavLink>
                <br />
                <NavLink to="/about" exact activeStyle={
                  { color: 'red' }
                }>About</NavLink>
                <br />
                <NavLink to="/resorts" exact activeStyle={
                  { color: 'red' }
                }> Resorts </NavLink>
                <NavLink to="/backcountry" exact activeStyle={
                  { color: 'red' }
                }> Backcountry Zones </NavLink>
              </ul>
            <Route path="/" render={
              () => {
                return ( <img src={Logo} className="App-logo" alt="logo" />)
              }
            } />
            <Route path="/about" render={
              () => {
                return (<h2>About</h2>)
              }
            } />
            <Route path="/resorts" render={
              () => {
                return (<h2>Resorts< Resorts /></h2>
                )
              }
            } />
            <Route path="/backcountry" render={
              () => {
                return (<h2>Backcountry Zones< Backcountry /></h2>
                )
              }
            } />
          </div>
         
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
