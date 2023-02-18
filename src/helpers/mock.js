import productsDB from './productsDB.json';

export const pedirData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productsDB)
    }, 3000)
})