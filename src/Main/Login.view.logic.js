import { connect } from 'react-redux'
import { login } from './store.js'
import Login from './Login.view.js'

export default connect(undefined, { onClick: login })(Login)
