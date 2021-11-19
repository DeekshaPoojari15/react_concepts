import React, { Component } from  'react'

class LifeCycleB extends Component{
	constructor(props){
		super(props)
		this.state={
			name:"Deeksha"
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log("B get derived state from props")
		return null
	}

	componentDidMount(){
		console.log("B component did mount")
	}

	render(){
		console.log("B render")
		return <div></div>
	}
}
export default LifeCycleB;