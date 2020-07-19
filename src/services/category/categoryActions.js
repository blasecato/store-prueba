import { createActions } from 'redux-actions';

export const { category } = createActions({
  category: {

    GET_CATEGORY: () => ({}),
    GET_CATEGORY_RESPONSE: (categorys) => ({ categorys }),

    GET_COLOR: () => ({}),
    GET_COLOR_RESPONSE: (colors) => ({ colors }),

    GET_PRICE: () => ({}),
    GET_PRICE_RESPONSE: (prices) => ({ prices }),
    
  }
})