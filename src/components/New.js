import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import Welcome from './Welcome1'
import UserProvider from './UserContext'

class Form extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      click:false
    }
  }

  nameHandler = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e) => {
    this.setState({click:true})
  }

  render(){
    return(         
            <div>
            <label>NAME</label>
            <input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.nameHandler} />
            <button onClick={this.submitHandler}>Submit </button>
            
            </div>
    )
  }
}

export default Form;
