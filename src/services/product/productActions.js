import { createActions } from 'redux-actions';

export const { product } = createActions({
  product: {
    CREATE_PRODUCT: (product) => ({ product }),
    CREATE_PRODUCT_RESPONSE: () => ({}),

    CREATE_DIAGNOSTICO: (product) => ({ product }),
    CREATE_DIAGNOSTICO_RESPONSE: () => ({}),

    GET_PRODUCT: () => ({}),
    GET_PRODUCT_RESPONSE: (products) => ({ products }),
    
    GET_DIAGNOSTICO: () => ({}),
    GET_DIAGNOSTICO_RESPONSE: (products) => ({ products }),

    GET: (id) => ({ id }),
    GET_RESPONSE: (products) => ({ products }),

    GET_COLOR: (id) => ({ id }),
    GET_COLOR_RESPONSE: (products) => ({ products }),

    GET_SUBCATEGORY: (id) => ({ id }),
    GET_SUBCATEGORY_RESPONSE: (products) => ({ products }),

    UPDATE: (product) => ({ product }),
    UPDATE_RESPONSE: () => ({}),
  }
})