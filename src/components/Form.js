import React, { Component } from 'react'
import Welcome from './Welcome'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import New from './New'

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
			<div>
				<label>NAME</label>
				<input type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.nameHandler} />
			</div>
			<button onClick={this.submitHandler}>Submit</button>
			{this.state.click ? <Welcome username={this.state.name} /> :null}
			</div>
		)
	}
}

export default Form;