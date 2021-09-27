import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             Topic:''
        }
    } 

    handleUserNameChange =(event) => { 
        this.setState({
            username:event.target.value 
        })
    }
    handleCommentChange =(event) => {  
        this.setState({
            Comment:event.target.value 
        })
    }
    handleTopicChange =(event) => { 
        this.setState({
            Topic:event.target.value 
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username } ${this.state.Comment} ${this.state.Topic}`) 
        event.preventDefault() 
    }



    render() {
        return (
        <form onSubmit={this.handleSubmit}>  
            <div>
                <label>UserName</label> 
                <input type="text" value={this.state.username } 
                onChange={this. handleUserNameChange}/> 
            </div> 

            <div>
                <label>Comment</label> 
                <textarea 
                 value={this.state.Comment} 
                 onChange={this. handleCommentChange} 
                /> 
            </div> 
            <div> 
                 <label>Topic</label> 
                 <select value={this.state.Topic}
                 onChange={this.handleTopicChange}> 
                     <option value='React'> React </option> 
                     <option value='Angular'> Angular </option>  
                     <option value='Vue'> Vue</option> 

                 </select>
            </div>
            <button type='submit'>Submit</button> 
        </form>    
        )
    }
}

export default Form




