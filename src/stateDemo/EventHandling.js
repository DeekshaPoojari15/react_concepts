import React, { Component } from 'react'

class EventHandling extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'hi',
		}
		this.inputHandler3=this.inputHandler3.bind(this)
	}

	inputHandler1(){
		this.setState({ 
			name:'Deeksha inline binding'
		})
	} 

	inputHandler2(){
		this.setState({ 
			name:'deeksha arrow call'
		})
	}

	inputHandler3(){
		this.setState({ 
			name:'deeksha constructor binding'
		})
	}  

	inputHandler4 = () => {
		this.setState({ 
			name:'deeksha arrow event handling'
		})
	}  

	render(){
		return(
			<div>
				{this.state.name}
				<br/>
				<button onClick={ this.inputHandler1.bind(this) } > Click (inline binding) </button>
				<br/>
				<br/>
				<button onClick={()=>{this.inputHandler2()}} > Click (arrow fn call) </button>
				<br/>
				<br/>
				<button onClick={()=>{this.inputHandler3()}} > Click (inside const binding) </button>
				<br/>
				<br/>
				<button onClick={this.inputHandler4} > Click (arrow event handling) </button>
			</div>
		)
	}
}
export default EventHandling;
