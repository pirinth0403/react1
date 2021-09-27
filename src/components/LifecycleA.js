import React, { Component } from 'react'
import LifecycleB  from './LifecycleB' 
export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'vishwas'
        } 

        console.log('LifecycleA constructor') 
    } 
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleA getDerivedStateFromProps') 
        return null
    }
    componentDidMount() {
        console.log('lifecycleA   componentDidMount') 
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('LifecycleA getSnapshotBeforeUpdate') 
        return null
    } 
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate') 
    } 
    changestate = () => {
        this.setState({
            name:' Printhapan reactjs ' 
        })
    }
    
    render() {
        console.log('LifecycleA render') 
        return (
            <div>
               <div> LifecycleA  </div> 
               <button onClick={this.changestate}> Change State</button> 
                <LifecycleB /> 
            </div>
        )
    }
}

export default LifecycleA 
