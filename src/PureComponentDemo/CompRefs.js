import React, {Component} from 'react'
import Input from './Input'

class CompRefs extends Component{
	constructor(props){
		super(props)
		this.componentRef=React.createRef()
	}

	clickHandler = (e) => {
		this.componentRef.current.InputFocus()
	}

	render(){
		return(
			<div>
				<Input ref={this.componentRef} />
				<button onClick={this.clickHandler}> Click </button>
			</div>
		)
	}
}

export default CompRefs;