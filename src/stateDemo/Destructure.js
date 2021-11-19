import React, { Component } from 'react'

class Destructure extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			comments:'',
			click:false
		}
	}

	inputHandler = (e) => {
		this.setState({[e.target.name]:e.target.value})
	}

	submitHandler = (e) => {
		this.setState({click:true})
	}

	render(){
		const {name, comments, click} =this.state
		return(
			<div>
				<input type="text" name="name" value={name} placeholder="NAME" onChange={this.inputHandler} />
				<br/>
				<br/>
				<textarea name="comments" value={comments} placeholder="COMMENTS" onChange={this.inputHandler} />
				<br/>
				<br/>
				<button onClick={this.submitHandler} > Submit</button>
				<br/>
				{
					click ? <div> {name} <br/> {comments} </div> : null
				}
			</div>
		)
	}
}
export default Destructure;