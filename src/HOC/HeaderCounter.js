import React, { Component } from 'react'
import withCounter from './withCounter'

class HeaderCounter extends Component{
	render(){
		const { count, incrementCount }=this.props
		return <h1 onMouseOver={incrementCount}> Hovered {count} times </h1>
	}
}

export default withCounter(HeaderCounter,5);