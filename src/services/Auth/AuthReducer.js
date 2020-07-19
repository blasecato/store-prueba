import { handleActions } from 'redux-actions';
import { Token } from '../../common/Storage/Token';

export const INITIAL_STATE = {
  authentication: Token.isTokenValid(),
  loading: false,
  error: false,
  success: false
}

const reducer = handleActions({
  AUTH: {
    LOGIN: (state, { payload: { } }) => ({ ...state, loading: true, error: false }),
    LOGIN_RESPONSE: {
      next(state, { payload: { token } }) {
        return { ...state, token, authentication: true }
      },
      throw(state, { error, payload: { message } }) {
        return { ...state, error, message }
      }
    },

    SIGNUP: (state, { payload: { } }) => ({ ...state, loading: true, error: false }),
    SIGNUP_RESPONSE: {
      next(state, { payload: { success } }) {
        return { ...state, success, error: false }
      },
      throw(state, { error, payload: { message } }) {
        return { ...state, error, message, success: false }
      }
    },

    SIGNUP_BENEFICIARY: (state, { payload: { } }) => ({ ...state, loading: true, error: false }),
    SIGNUP_BENEFICIARY_RESPONSE: {
      next(state, { payload: { success } }) {
        return { ...state, success }
      },
      throw(state, { error, payload: { message } }) {
        return { ...state, error, message }
      }
    },

    LOGOUT: (state, { payload: { } }) => ({ ...state, authentication: false }),
  }
},
  INITIAL_STATE
);

export default reducer;