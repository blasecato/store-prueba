import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  products: []
}

const reducer = handleActions({
  product: {
    CREATE_PRODUCT: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_PRODUCT_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE_DIAGNOSTICO: (state, { payload: { } }) => ({ ...state, loading: true }),
    CREATE_DIAGNOSTICO_RESPONSE: {
      next(state, { payload: { } }) {
        return { ...state }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_PRODUCT: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PRODUCT_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_PRODUCTS: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PRODUCTS_RESPONSE: {
      next(state, { payload: { listProducts } }) {
        return { ...state, listProducts }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_PRICES: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PRICES_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_RANGE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RANGE_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_DIAGNOSTICO: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_DIAGNOSTICO_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_COLOR: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_COLOR_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_SUBCATEGORY: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_SUBCATEGORY_RESPONSE: {
      next(state, { payload: { products } }) {
        return { ...state, products }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    UPDATE: (state, { payload: { } }) => ({ ...state, loading: true }),
    UPDATE_RESPONSE: {
      next(state, { payload: { product } }) {
        return { ...state, product }
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