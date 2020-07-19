import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  serviceId: 1,
  arrayPrpducts: []
}

const reducer = handleActions({
  PRODUCTCART: {
    ADD_CAR: (state, { payload: { arrayPrpducts } }) => ({ ...state, arrayPrpducts }),
    SEND_CAR: (state, { payload: { } }) => ({ ...state }),
    SEND_CAR_RESPONSE: {
      next(state, { payload: { } }) {
        return { arrayPrpducts: [], loading: false }
      },
      throw(state, { error, payload: { message } }) {
        return { ...state, error, message, loading: false }
      }
    },
    UPDATE_REDUCER: (state, { payload: { reducer } }) => ({ ...state, arrayPrpducts: reducer }),
    DELETE_BUILDS: (state, { payload: { } }) => ({ ...state }),
    DELETE_BUILDS_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state, loading: false }
      },
      throw(state, { error, payload: { message } }) {
        return { ...state, error, message, loading: false }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;