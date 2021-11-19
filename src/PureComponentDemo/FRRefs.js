import React, {Component} from 'react'
import FRInput from './FRInput'

class FRRefs extends Component{
	constructor(props){
		super(props)
		this.frRef=React.createRef()
	}

	clickHandler = (e) => {
		this.frRef.current.focus()
	}

	render(){
		return(
			<div>
				<FRInput ref={this.frRef} />
				<button onClick={this.clickHandler}> Click </button>
			</div>
		)
	}
}

export default FRRefs;