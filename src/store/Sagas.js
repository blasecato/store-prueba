import { fork, all } from "redux-saga/effects";
import ProductSaga from "../services/product/productSaga";
import CategorySaga from "../services/category/categorySaga";

export default function* rootSaga() {
  yield all([
    fork(ProductSaga),
    fork(CategorySaga),
  ]);
}
