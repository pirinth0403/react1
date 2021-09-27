import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'vishwas'
        } 

        console.log('LifecycleB constructor') 
    } 
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedStateFromProps') 
        return null
    }
    componentDidMount() {
        console.log('lifecycleB   componentDidMount') 
    } 
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate') 
        return null 

    } 
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')  
    }
    
    
    render() {
        console.log('LifecycleB render') 
        return (
            <div>
               <div>  LifecycleB </div> 
               
            </div>
        )
    }
}

export default LifecycleB
