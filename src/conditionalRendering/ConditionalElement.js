import React, { Component } from 'react'

class ConditionalElement extends Component{
	constructor(props){
		super(props)
		this. state={
			loggedIn:true
		}
	}

	render(){

		let message
		if(!this.state.loggedIn){
			message="Welcome Guest"
		}else{
			message="Welcome User"
		}
		return <h4>{message}</h4>
	}

}
export default ConditionalElement;
