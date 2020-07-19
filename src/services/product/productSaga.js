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

// function* createDiagnostico({ payload }) {
//   const response = yield Api.post('/crops/create/diagnostic', payload.organization)
//   if (response.ok) {
//     yield put(organization.createDiagnosticoResponse());
//   } else {
//     const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
//     yield put(organization.createDiagnosticoResponse(err))
//   }
// }

function* getProduct() {
  const response = yield Api.get('/products')
  if (response.ok) {
    yield put(product.getProductResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCTS')
    yield put(product.getProductResponse(err))
  }
}

// function* getDiagnostico() {
//   const response = yield Api.get('/crops/get/crops-diagnostic')
//   if (response.ok) {
//     yield put(organization.getDiagnosticoResponse(response.payload));
//   } else {
//     const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
//     yield put(organization.getDiagnosticoResponse(err))
//   }
// }

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
  console.log("hola",payload)
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

// function* update({ payload }) {
//   const response = yield Api.put(`/organization/update`, payload.organization)
//   console.log(payload.organization)
//   if (response.ok) {
//     yield put(organization.updateResponse());
//   } else {
//     const err = new TypeError('ERROR_GET_PRODUCER')
//     yield put(organization.getResponse(err))
//   }
// }

function* ActionWatcher() {
  yield takeLatest(product.createProduct, createProduct)
  yield takeLatest(product.getProduct, getProduct)
  yield takeLatest(product.get, get)
  yield takeLatest(product.getColor, getColor)
  yield takeLatest(product.getSubcategory, getSubcategory)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}