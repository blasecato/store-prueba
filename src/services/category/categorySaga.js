import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { category } from "./categoryActions"


function* getCategory() {
  const response = yield Api.get('/category')
  if (response.ok) {
    yield put(category.getCategoryResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_CATEGORY')
    yield put(category.getCategoryResponse(err))
  }
}

function* getColor() {
  const response = yield Api.get('/colors')
  if (response.ok) {
    yield put(category.getColorResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_COLOR')
    yield put(category.getColorResponse(err))
  }
}
function* getPrice() {
  const response = yield Api.get('/prices')
  if (response.ok) {
    yield put(category.getPriceResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRICE')
    yield put(category.getPriceResponse(err))
  }
}


function* ActionWatcher() {
  yield takeLatest(category.getCategory, getCategory)
  yield takeLatest(category.getColor, getColor)
  yield takeLatest(category.getPrice, getPrice)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}