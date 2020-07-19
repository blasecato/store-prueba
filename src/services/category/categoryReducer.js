import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  categorys: [],
  colors:[],
  prices:[]
}

const reducer = handleActions({
  category: {
 
    GET_CATEGORY: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_CATEGORY_RESPONSE: {
      next(state, { payload: { categorys } }) {
        return { ...state, categorys }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_COLOR: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_COLOR_RESPONSE: {
      next(state, { payload: { colors } }) {
        return { ...state, colors }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_PRICE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PRICE_RESPONSE: {
      next(state, { payload: { prices } }) {
        return { ...state, prices }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    
  }
},
  INITIAL_STATE
);

export default reducer;