import React, { Component } from 'react'

class ConditionalShort extends Component{
	constructor(props){
		super(props)
		this. state={
			loggedIn:true
		}
	}
	render(){
		let msg=""
	  return this.state.loggedIn && <h1> User </h1>
	}

}
export default ConditionalShort;