import { createActions } from 'redux-actions';

export const { productcart } = createActions({
  PRODUCTCART: {
    ADD_CAR: (arrayPrpducts) => ({ arrayPrpducts }),
    SEND_CAR: (sendProduct) => ({ sendProduct }),
    SEND_CAR_RESPONSE: () => ({}),
    UPDATE_REDUCER: (reducer) => ({ reducer }),
    DELETE_BUILDS: (idProducts) => ({ idProducts }),
    DELETE_BUILDS_RESPONSE: () => ({})
  }
})