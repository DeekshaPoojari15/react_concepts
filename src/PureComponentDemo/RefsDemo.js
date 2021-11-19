import React, {Component} from 'react'
{/* create ref approach*/}

class RefsDemo extends Component{
	constructor(props){
		super(props)
		this.inputRef=React.createRef()
	}

	componentDidMount(){
		this.inputRef.current.focus()
		console.log(this.inputRef)
	}

	clickHandler = (e) => {
		alert(this.inputRef.current.value)
	}

	render(){
		return(
			<div>
				<input type="text" ref={this.inputRef} />
				<button onClick={this.clickHandler}> Click </button>
			</div>
		)
	}
}

export default RefsDemo;