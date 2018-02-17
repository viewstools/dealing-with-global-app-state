import React from 'react'
import Login from './Login.view.js'

export default class LoginLogic extends React.Component {
  // state = {
  //   isClicked: false,
  // };

  // onClick = () => {
  //   this.setState({
  //     isClicked: !this.state.isClicked,
  //   });
  // };

  render() {
    return <Login {...this.props} /*{...this.state} onClick={this.onClick}*/ />
  }
}
