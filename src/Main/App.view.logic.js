import { Provider, Subscribe } from 'unstated'
import React from 'react'
import App from './App.view.js'
import LoginContainer from './LoginContainer.js'

export default class AppLogic extends React.Component {
  render() {
    const { props } = this
    return (
      <Provider>
        <Subscribe to={[LoginContainer]}>
          {({ state }) => <App {...props} isLoggedIn={state.isLoggedIn} />}
        </Subscribe>
      </Provider>
    )
  }
}
