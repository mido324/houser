import React, { Component } from 'react';
import Auth from './Components/Login/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header';
import router from './router'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Auth/>
       <Dashboard/> */}
       {router}
      </div>
    );
  }
}

export default App;
