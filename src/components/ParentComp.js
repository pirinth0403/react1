import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends PureComponent { 
     constructor(props) {
         super(props)
     
         this.state = {
              name:"vishawas" 
         }
     } 
     componentDidMount() {
         setInterval(() => {
             this.setState({
                 name:'vishawas'
             })
         } ,2000) 
     }
     
    render() { 
        console.log(" &&&&& Parent Component Render &&&&&") 
        return (
            <div>
                Parent Components 
                <RegComp name={this.state.name} /> 
                <PureComp name={this.state.name} />  
            </div>
        )
    }
}

export default ParentComp