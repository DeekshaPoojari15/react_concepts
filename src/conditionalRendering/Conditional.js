import React, { Component } from 'react'

class Conditional extends Component{
	constructor(props){
		super(props)
		this. state={
			loggedIn:false
		}
	}

	loginHandler = () => {
		this.setState({loggedIn:true})
	}

	render(){
		if(!this.state.loggedIn){
			return(
				<div>
				<h4>  Welcome Guest </h4>
				<button onClick={this.loginHandler}>Login (if-else)</button>
				</div>
			)
		}else{
			return <h4> Welcome User </h4>
		}

		let message
		if(!this.state.loggedIn){
			return(
				<div>
				message="Welcome Guest"
				<button onClick={this.loginHandler}>Login (element)</button>
				</div>
			)
		}else{
			message="Welcome User"
		}
		return <h4>{message}</h4>
	}

}
export default Conditional;