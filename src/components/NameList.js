import React from 'react'
import Person  from './Person' 

function NameList() { 
    const names = ['Bruce' ,'kamal', 'ram' ,'ram']  
    const persons = [
        {
            id:1,
            name:'printh',
            age:25,
            skill:'reactjs'
        },
        {
            id:2,
            name:'Ricky',
            age:24,
            skill:'flotter'
        },
        {
            id:3,
            name:'logu',
            age:27,
            skill:'js'
        },
    ] 
    const namesList = names.map((name,index) => <h2 key = {name,index} > {names} </h2>)  
    return <div> {namesList} </div>  
    
}

export default NameList
