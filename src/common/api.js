//import { apiUrl } from '../Config/Environments';
import { Token } from './Storage/Token';
import { store } from '../index'
import { auth } from '../services/Auth/AuthActions';

const apiUrl = 'http://localhost:3001'

export class Api {
  post(url, data, formData) {
    let dataBody

    if (formData) {
      dataBody = new FormData();
      Object.keys(data).map(key => {
        if (!Array.isArray(data[key]))
          dataBody.append(key, data[key]);
        else
          data[key].forEach(item => dataBody.append(key, item))
      })
    } else
      dataBody = JSON.stringify(data);

    return fetch(`${apiUrl}${url}`, {
      method: 'POST',
      headers: (formData ? {
        'Authorization': `Bearer ${Token.getToken()}`
      } : {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Token.getToken()}`
        }),
      body: dataBody
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }

  put(url, data, header) {
    let isFormData = data instanceof FormData;

    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: (header ? header :
        isFormData ?
          { 'Authorization': `Bearer ${Token.getToken()}` }
          :
          {
            'Accept': isFormData ? '' : 'application/json',
            'Content-type': isFormData ? '' : 'application/json',
            'Authorization': `Bearer ${Token.getToken()}`
          }
      ),
      body: isFormData ? data : JSON.stringify(data)
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }

  get(url, params) {
    url = new URL(`${apiUrl}${url}`);
    if (params)
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Token.getToken()}`
      }
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }
}

export default new Api();