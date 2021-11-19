import React, { Component } from 'react'

class ConditionalTernary extends Component{
	constructor(props){
		super(props)
		this. state={
			loggedIn:false
		}
	}
	render(){
		let msg=""
		{this.state.loggedIn ? msg="User" : msg="Guest"}
	  return (	  	
	  	<h2>{msg}</h2>
	  )
	}

}
export default ConditionalTernary;