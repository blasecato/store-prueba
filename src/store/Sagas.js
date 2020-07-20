import { fork, all } from "redux-saga/effects";
import ProductSaga from "../services/product/productSaga";
import CategorySaga from "../services/category/categorySaga";
import carSaga from '../services/car/ProductCarSaga'

export default function* rootSaga() {
  yield all([
    fork(ProductSaga),
    fork(CategorySaga),
    fork(carSaga),
  ]);
}
