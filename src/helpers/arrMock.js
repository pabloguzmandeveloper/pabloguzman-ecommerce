import {arrayplano} from './arrayplano.js';

export const dataAsyncro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arrayplano)
    }, 3000)
})