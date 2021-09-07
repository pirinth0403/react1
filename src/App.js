import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';


function App() {
  return (
    <div className="App"> 
    {/* <UserGreeting/> */} 
     <NameList /> 
    {/* <Person />  */} 
    
      
    </div>
  );
}

export default App;
