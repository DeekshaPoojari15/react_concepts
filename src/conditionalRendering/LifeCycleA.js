import React, { Component } from  'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{
	constructor(props){
		super(props)
		this.state={
			name:"Deeksha"
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log("A get derived state from props")
		return null
	}

	componentDidMount(){
		console.log("A component did mount")
	}

	render(){
		console.log("A render")
		return <div><LifeCycleB /></div>
	}
}
export default LifeCycleA;