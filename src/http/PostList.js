import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component{
	constructor(props){
		super(props)
		this.state={
		posts:[]
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			console.log(response)
			this.setState({posts:response.data})
		})
		.catch(error => {
			console.log(error)
		})
	}

	render(){
		return(
			<div>
				List of posts
				{
				this.state.posts.length ?
				this.state.posts.map(post => 
					<div key={post.id}>{post.title}</div>
				) :
				null
				}
			</div>
		)
	}
}
export default PostList;