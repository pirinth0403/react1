import React, { Component } from 'react'

export class FocusInput extends Component { 
    constructor(props) {
        super(props)
        this.ComponentRef=React.createRef;
        
    } 
    clickHandler = () => {
        this.ComponentRef.current.focusInput(); 
    }
    
    render() {
        return (
            <div>
                  <input ref={this.ComponentRef}/> 
                  <button onclick={this.clickHandler}> Focus Input </button> 
            </div>
        )
    }
}

export default FocusInput
