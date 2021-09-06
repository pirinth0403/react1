import React, { Component } from 'react'

 class UserGreeting extends Component { 
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin:false
         }
     }
     
    render() { 

        return this.state.isLoggedin && <div> welcome boy333 </div>

        // return (
        //     this.state.isLoggedin?
        //     <div> welcome boy333 </div>:
        //     <div> something wrong 33</div> 
        // )


        // let message 
        // if(this.state.isLoggedin){ 
        //     message=<div>wekcome boy</div>
        // } 
        // else {
        //     message=<div>somethng wrong </div> 
        // }
        // return <div>{message}</div> 


        // if(this.state.isLogin)
        // {
        //    return  <div> welcome boy</div>
        // } 
        // else {
        //    return   <div> something wrong </div>  
        // }
               


        // return (
        //     <div> 
        //           welcome vishwas
        //     </div>
        // )
    }
}

export default UserGreeting
