import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentComp extends Component{
	constructor(props){
		super(props)
		this.state={
			name:"Deeksha"
		}
	}

	componentDidMount(){
		setInterval(()=>{this.setState({name:"Deeksha"})},2000)
	}

	render(){
		console.log('*******Parent Component*******')
		return(
			<div> 
			<PureComp name={this.state.name} />
			<RegularComp name={this.state.name} />
			<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp;