import { createStore } from 'redux'

function reducer(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true }
    default:
      return state
  }
}

const LOGIN = 'LOGIN'
export const login = () => ({ type: LOGIN })

const store = createStore(reducer)

export { store }
