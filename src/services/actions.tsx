/* eslint-disable no-async-promise-executor */
import { ReactElement } from 'react';
import history from '../history';
import api from './api';

function clear() {
  localStorage.removeItem('token');
  history.push('/login');
}

function handleResponse(resp: {status:any, data:any}) {
  if(resp){
    if (resp.status === 403) {
      clear();
    } else {
      return resp.data;
    }
  }

}

// export function getPermission(url, method){

//   return true;
// }

export async function get(url:any) {

  return await api.get(url, {
    headers: {
      authorization: 'Bearer '+ await localStorage.getItem('token')
    }
  })
    .then((response:any):any => {
      return handleResponse(response);
    })
    .catch((error:any):any => {
      console.log(error);
      clear();
    });
}


// export function put(url, data, method = 'PUT') {

//   return new Promise(async (resolve, reject) => {
//     if(!getPermission(url, method)){
//       reject({
//         reason:'Você não tem permissão para realizar esta operação, Verifique!'
//       });
//       return;
//     }
//     try {
//       api.put(`${url}`, JSON.stringify(data), {
//         headers: {
//           authorization: 'Bearer '+ await localStorage.getItem('token')
//         }
//       })
//         .then(response => {
//           resolve(handleResponse(response));
//         })
//         .catch(error => {
//           reject(error);
//           // clear()
//         });
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
