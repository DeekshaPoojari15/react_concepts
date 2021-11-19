import React, { Component } from 'react'

class SetStateDemo extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		}
	}

	Increment = (e) => {
		this.setState((pervState) => ({
			count:pervState.count+1
		}))
	}

	Decrement = (e) => {
		this.setState((pervState) => ({
			count:pervState.count-1
		}))
	}

	Increment5 = (e) => {
		this.Increment()
		this.Increment()
		this.Increment()
		this.Increment()
		this.Increment()
	}

	render(){
		return(
			<div>
				{this.state.count}
				<br/>
				<button onClick={this.Increment}> Increment 1</button>
				<br/>
				<button onClick={this.Decrement}> Decrement 1</button>
				<br/>
				<button onClick={this.Increment5}> Increment 5</button>
			</div>
		)
	}
}
export default SetStateDemo;