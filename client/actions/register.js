import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin, loginError} from './login'

export const registerUserRequest = (creds, cb) =>
  dispatch =>
    request
      .post('/api/auth/register')
      .send(creds)
      .then(res => {
        const userInfo = saveUserToken(res.body.token)
        dispatch(receiveLogin(userInfo))
        cb()
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message))
        cb(err)
      })
