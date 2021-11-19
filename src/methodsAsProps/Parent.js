import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component{
	constructor(props){
		super(props)
		this.state={
			parentName:'Parent'
		}
		{/* this.greetParent=this.greetParent.bind(this) -- w/o params*/}
		this.greetParentFromChild=this.greetParentFromChild.bind(this)
	}

	greetParent(){
		alert(`Hello ${this.state.parentName}`)
	}

	greetParentFromChild(childName){
		alert(`Hello ${this.state.parentName} from ${childName}`)
	}

	render(){
		{/* return <Child greetHandler={this.greetParent} /> --w/o paramaters */}
		return <Child greetHandler={this.greetParentFromChild} />
	}
}
export default Parent;