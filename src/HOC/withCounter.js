import React from 'react'

const withCounter =( WrappedComponent,count) => {
	class WithCounter extends React.Component{
		constructor(props){
			super(props)
			this.state={
				count:0
			}
		}

		incrementCount = (e) => {
			this.setState( prevState => {
				return {count:prevState.count + count}
			})
		}

		render(){
			return(
				<WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
			)
		}
	}
	return WithCounter
}
export default withCounter;