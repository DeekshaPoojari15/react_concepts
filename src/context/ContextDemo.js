import UserProvider from './userContext.UserProvider'
import ComponentC from './ComponentC'
import React, { Component } from 'react'

class ContextDemo extends Component{
	render(){
		return(
			<div>
				<UserProvider value="Deeksha">
					<Component C />
				</UserProvider>
			</div>		
		)
	}
}

export default ContextDemo;