import { connect, Provider } from 'react-redux'
import { store } from './store.js'
import React from 'react'
import App from './App.view.js'

const ConnectedApp = connect(state => state)(App)

export default class AppLogic extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp {...this.props} />
      </Provider>
    )
  }
}
