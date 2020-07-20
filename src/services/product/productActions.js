import { createActions } from 'redux-actions';

export const { product } = createActions({
  product: {
    CREATE_PRODUCT: (product) => ({ product }),
    CREATE_PRODUCT_RESPONSE: () => ({}),


    GET_PRODUCT: (id) => ({ id }),
    GET_PRODUCT_RESPONSE: (products) => ({ products }),

    GET_PRODUCTS: (id) => ({ id }),
    GET_PRODUCTS_RESPONSE: (listProducts) => ({ listProducts }),
    
    GET_PRICES: (id) => ({ id }),
    GET_PRICES_RESPONSE: (products) => ({ products }),

    GET_RANGE: (id) => ({ id }),
    GET_RANGE_RESPONSE: (products) => ({ products }),

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