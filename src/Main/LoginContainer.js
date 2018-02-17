import { Container } from 'unstated'

export default class LoginContainer extends Container {
  state = {
    isLoggedIn: false,
  }

  login = () => {
    this.setState({ isLoggedIn: true })
  }
}
