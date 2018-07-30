import request from '../utils/api'
import { saveUserToken } from '../utils/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const requestLogin = () => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false
})

export const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  user
})

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export const loginUser = (creds, cb) =>
  dispatch => {
    dispatch(requestLogin(creds))
    return request('post', 'auth/login', creds)
      .then(res => {
        if (res.status == 403) {
          dispatch(loginError(res.body.message))
          return cb(res.body.message)
        }
        const userInfo = saveUserToken(response.body.token)
        dispatch(receiveLogin(userInfo))
        cb()
      })
      .catch(err => dispatch(loginError(err.response.body.message)))
  }
