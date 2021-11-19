import React, {Component} from 'react'
{/* callback ref approach - not working*/}

class RefsDemo2 extends Component{
	constructor(props){
		super(props)
		this.cbRef=null
		this.setcbRef = element => {
			this.cbRef=element
		}
	}

	componentDidMount(){
		console.log(this.cbRef)
		if (this.cbRef) {
			this.cbRef.current.focus()
		}
	}

	

	render(){
		return(
			<div>
				<input type="text" ref={this.cbRef} />
			</div>
		)
	}
}

export default RefsDemo2;