import React, { Component } from 'react'

class FormElement extends Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			comments:'',
			topic:'react'
		}
	}

	usernameHandler  = (e) => {
		this.setState({username:e.target.value})
	}

	commentsHandler  = (e) => {
		this.setState({comments:e.target.value})
	}

	topicHandler  = (e) => {
		this.setState({topic:e.target.value})
	}

	submitHandler = (e) => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		e.preventDefault()
	}

	render(){
		return(
			<form onSubmit={this.submitHandler}>
				<div>
					<label>Username </label>
					<input type="text" value={this.state.username} onChange={this.usernameHandler} />
				</div>
				<div>
					<label>Comments </label>
					<textarea rows={3} value={this.state.comments} onChange={this.commentsHandler} />
				</div>
				<div>
					<label>Topic </label>
					<select value={this.state.topic} onChange={this.topicHandler} >
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="node">Node</option>
					</select>
				</div>
				<button type="submit"> Submit</button>
			</form>
		)
	}
}

export default FormElement;