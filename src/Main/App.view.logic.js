import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {
  state = {
    isLoggedIn: false,
  }

  login = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }

  render() {
    return <App {...this.props} {...this.state} login={this.login} />
  }
}
