//import logo from './logo.svg';
import React,{ Component } from 'react';  
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
     return ( 
       <div className= "App"> 
        <  Greet name="Diana"  heroName="Wonder woman" /> 
        < Welcome name="Bruce" heroName="Batsman" /> 
      </div>
     );
  } 

}

export default App; 
