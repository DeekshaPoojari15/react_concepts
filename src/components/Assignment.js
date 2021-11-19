import React, { Component } from 'react'
import Welcome1 from './Welcome1'
import './style.css'

class Assignment extends Component{
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

          if(!this.state.click){
            return(
            <div>
            <h1> Assignment </h1>
            <div className='cardItems'>
            <input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.nameHandler} />
            <button onClick={this.submitHandler}>Submit </button>
            </div>
            </div>
            )
          }else{
            return(
              <Welcome1 username={this.state.name}/>
            )
          }
  }
}

export default Assignment;
