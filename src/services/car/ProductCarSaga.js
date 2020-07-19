import { put, takeLatest, all } from 'redux-saga/effects';
import { productcart as productcartActions } from "./ProductCarAction"
import Api from '../../common/Api/Api'
import { push } from 'react-router-redux'

function* sendProduct({ payload }) {
  const { sendProduct } = payload
  const response = yield Api.post("/products/addCar", sendProduct)
  if (response.ok) {
    yield put(push('/finish-shoping'));
    yield put(productcartActions.sendCarResponse());
    localStorage.removeItem('car');
  } else {
    const err = new TypeError('ERROR_ADD_CAR')
    yield put(productcartActions.sendCarResponse(err))
  }
}

function* addCar({ payload }) {
  const { arrayPrpducts } = payload
  if (arrayPrpducts.length > 0) {
    localStorage.setItem('car', JSON.stringify(arrayPrpducts));
  } else {
    localStorage.removeItem('car');
  }
}

function* deleteBuilds({ payload }) {
  const { idProducts } = payload

  const response = yield Api.post(`/products/delete-build`, { idProducts })
  if (response.ok) {
    yield put(productcartActions.deleteBuildsResponse(response.payload.token));
  } else {
    const err = new TypeError(response.payload.message)
    yield put(productcartActions.deleteBuildsResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(productcartActions.sendCar, sendProduct)
  yield takeLatest(productcartActions.addCar, addCar)
  yield takeLatest(productcartActions.deleteBuilds, deleteBuilds)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}