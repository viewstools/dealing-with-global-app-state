import { Subscribe } from 'unstated'
import Login from './Login.view.js'
import LoginContainer from './LoginContainer.js'
import React from 'react'

const LoginLogic = props => (
  <Subscribe to={[LoginContainer]}>
    {({ login }) => <Login {...props} onClick={login} />}
  </Subscribe>
)

export default LoginLogic
