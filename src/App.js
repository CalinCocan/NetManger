import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';



class App extends Component {
  state = {}
  render() {
    return (
      <div >
        {/* <header>      Info header   </header> */}
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>

        {/* <footer>          Info footer        </footer> */}
      </div>
    );
  }
}

export default App;
