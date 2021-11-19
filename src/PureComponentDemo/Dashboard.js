import React, { Component } from "react"
import Modal from './Modal.js'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal new</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    )
  }
}

export default Dashboard;