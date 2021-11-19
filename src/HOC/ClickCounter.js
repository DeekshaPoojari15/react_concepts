import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component{
	render(){
		const { count, incrementCount, name }=this.props
		return <button onClick={incrementCount}> Clicked {count} times {name} </button>
	}
}

export default withCounter(ClickCounter);