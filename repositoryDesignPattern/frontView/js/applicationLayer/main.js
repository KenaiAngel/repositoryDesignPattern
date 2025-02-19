import RepositoyRemoteProduct from '../repositoryLayer/repositoryRemoteProduct.js'
import RepositoryCrudProduct from '../repositoryLayer/RepositoryCrudProduct.js';
import Product from '../models/product.js';

const remoteAccessProduct = new RepositoyRemoteProduct();

const localStorageProducts = localStorage.getItem('products');

if (localStorageProducts === null) {
    remoteAccessProduct.loadProduct().then((products) => {
        
        localStorage.setItem('products', JSON.stringify(products));

        const repoCrudProduct = new RepositoryCrudProduct(products);
        console.log("HolaRemote",repoCrudProduct.listOfProduct);
    }).catch(message => {
        console.error(message);
    });
} else {
    // Si los productos ya están en localStorage, los usamos directamente
    const products = JSON.parse(localStorageProducts);
    const repoCrudProduct = new RepositoryCrudProduct(products);
    repoCrudProduct.orderArray();
    console.log("HolaLocal",repoCrudProduct.listOfProduct);
}












