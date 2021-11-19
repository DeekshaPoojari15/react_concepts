import React from 'react'
import UserConsumer from './UserContext'

function Welcome() {
    <UserConsumer>
    {name => {
      return <h1> Hello {name} </h1>
    }}
    </UserConsumer>
}

export default Welcome;