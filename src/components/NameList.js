import React from 'react'
import Person  from './Person' 

function NameList() {
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
    const personsList = persons.map(person => <Person person={person} />)  
    return <div> {personsList} </div>  
    
}

export default NameList
