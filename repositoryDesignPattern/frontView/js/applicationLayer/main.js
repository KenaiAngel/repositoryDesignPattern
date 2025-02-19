import RepositoyRemoteProduct from '../repositoryLayer/repositoryRemoteProduct.js'
import RepositoryCrudProduct from '../repositoryLayer/RepositoryCrudProduct.js';
import Product from '../models/product.js';

const hola = new RepositoyRemoteProduct();

hola.loadProduct().then(() => {
    const hola2 = new RepositoryCrudProduct(hola1.getProducts);
}).catch(message=>{
    console.error(message);
});









