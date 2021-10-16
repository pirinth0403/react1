import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import Stylecheets  from './components/Stylecheets'; 
import Inline from './components/Inline';
import './appStyle.css';
import style from './appStyle.module.css';
import Form from './components/Form';
import LifecycleB from './components/LifecycleB';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';



function App() {
  return (
    <div className="App"> 

      {/* <h1 className='error'>Error</h1> 
      <h1 className={style.success}>Success</h1>   
 */} 


    {/* <UserGreeting/> */} 
     {/* <NameList />  */}
    {/* <Person />  */} 
    {/* <Stylecheets primary={true} />  */} 
    {/* <Inline />  */}
    {/* <Form /> */}
    {/* <LifecycleB /> */}
    {/* <LifecycleA />   */} 
    {/* <FragmentDemo/>  */}
    {/* <Table/> */} 
    {/* <PureComp />  */} 
    <ParentComp /> 
    </div>
  );
}

export default App;
