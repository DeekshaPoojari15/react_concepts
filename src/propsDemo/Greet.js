import React, { Component } from 'react'

{/*
function Greet(props){
	return(
		<h4> Welcome {props.name} aka {props.heroName}</h4>
	)
}
*/}

class Greet extends Component{
	render(){
		return(
			<h4> Welcome {this.props.name} aka {this.props.heroName} </h4>
		)
	}
}

export default Greet;