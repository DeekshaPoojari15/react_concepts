import React, { Component } from 'react'

class Welcome extends Component{
	constructor(props){
		super(props)
		this.state={
			message:"Welcome vistor",
			name:''
		}
	}

	nameHandler = (event) => {
		this.setState({ name:event.target.value})
	}

	submitHandler = (event) => {
		this.setState({ message:`Welcome ${this.state.name}`})
	}

	render(){
		return(
			<div>
				<h2> {this.state.message} </h2>
				<input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="NAME"/>
				<button onClick={this.submitHandler}> Subscribe </button>
			</div>
		)
	}
}

export default Welcome;