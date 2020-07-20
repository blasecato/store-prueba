import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { product } from "./productActions"

function* createProduct({ payload }) { 
  const response = yield Api.post('/Product/create', payload.product)
  if (response.ok) {
    yield put(product.createProductResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_PRODUCT')
    yield put(product.createProductResponse(err))
  }
}



function* getPrices({ payload }) {
  if(payload.id.value){
    const response = yield Api.get(`/products?_sort=priceBefore&_order=${payload.id.value}&_page=${payload.id.pageCounter}&_limit=6`)
    if (response.ok) {
      yield put(product.getPricesResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCTS')
      yield put(product.getPricesResponse(err))
    }
  }else if(payload.id.pageCounter){
    const response = yield Api.get(`/products?_page=${payload.id.pageCounter}&_limit=6`)
    if (response.ok) {
      yield put(product.getProductResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCTS')
      yield put(product.getProductResponse(err))
    }
  }
}


function* getRange({ payload }) {
    const response = yield Api.get(`/products?priceBefore_gte=${payload.id.min}&priceBefore_lte=${payload.id.max}&_page=1&_limit=6`)
    if (response.ok) {
      yield put(product.getRangeResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCTS')
      yield put(product.getRangeResponse(err))
    }
  
}

function* getProduct({ payload }) {
  const response = yield Api.get(`/products?_page=${payload.id}&_limit=6`)
  if (response.ok) {
    yield put(product.getProductResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCTS')
    yield put(product.getProductResponse(err))
  }
}




function* getProducts() {
  const response = yield Api.get(`/products`)
  if (response.ok) {
    yield put(product.getProductsResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCTS')
    yield put(product.getProductsResponse(err))
  }
}




function* get({ payload }) {
  const response = yield Api.get(`/products?category=${payload.id}`)
  if (response.ok) {
    yield put(product.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCT')
    yield put(product.getResponse(err))
  }
}

function* getColor({ payload }) {

  if(payload.id.category && payload.id.subCategory){
    const  response = yield Api.get(`/products?color=${payload.id.value}&category=${payload.id.category}&subCategory=${payload.id.subCategory}`)
    if (response.ok) {
      yield put(product.getColorResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCT')
      yield put(product.getColorResponse(err))
    }
  }
  else if(payload.id.category){
    const  response = yield Api.get(`/products?color=${payload.id.value}&category=${payload.id.category}`)
    if (response.ok) {
      yield put(product.getColorResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCT')
      yield put(product.getColorResponse(err))
    }
  }
  else{
    const  response = yield Api.get(`/products?color=${payload.id.value}`)
    if (response.ok) {
      yield put(product.getColorResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCT')
      yield put(product.getColorResponse(err))
    }
  }

}


function* getSubcategory({ payload }) {
  if(payload.id.category && payload.id.subCategory){
    const  response = yield Api.get(`/products?subCategory=${payload.id.subCategory}&category=${payload.id.category}`)
    if (response.ok) {
      yield put(product.getSubcategoryResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCT')
      yield put(product.getSubcategoryResponse(err))
    }
  }
  else if(payload.id.category){
    const response = yield Api.get(`/products?category=${payload.id.category}`)
      if (response.ok) {
        yield put(product.getResponse(response.payload));
      } else {
        const err = new TypeError('ERROR_GET_PRODUCT')
        yield put(product.getResponse(err))
      }
  }
  else{
    const  response = yield Api.get(`/products?subCategory=${payload.id.subCategory}`)
    if (response.ok) {
      yield put(product.getSubcategoryResponse(response.payload));
    } else {
      const err = new TypeError('ERROR_GET_PRODUCT')
      yield put(product.getSubcategoryResponse(err))
    }
  }
 
}

function* ActionWatcher() {
  yield takeLatest(product.createProduct, createProduct)
  yield takeLatest(product.getProduct, getProduct)
  yield takeLatest(product.getProducts, getProducts)
  yield takeLatest(product.getPrices, getPrices)
  yield takeLatest(product.getRange, getRange)
  yield takeLatest(product.get, get)
  yield takeLatest(product.getColor, getColor)
  yield takeLatest(product.getSubcategory, getSubcategory)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}