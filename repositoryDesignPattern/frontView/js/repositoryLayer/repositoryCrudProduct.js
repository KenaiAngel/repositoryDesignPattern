import InterfaceCrudProduct from "../intarfaceLayer/interfaceCrudProduct.js";

class RepositoryCrudProduct extends InterfaceCrudProduct {
    constructor(products){
        super();
        this.products = products;

    }

    orderedInsertion(product) {
        if(this.searchById(product.id)!==null){
            console.log("Ya se encuentra el producto");
           return;
        }
        let index = this.products.findIndex(p => p.id > product.id);
        console.log(this.products);
        (index === -1)? (this.products.push(product)):(this.products.splice(index, 0, product));
       
    }
    
    update(product) {
        let index = this.products.findIndex(p => p.id === product.id);
        (index === -1)?(console.log("No se encuentra el producto")):(this.products[index] = product);
        
    }

    delete(id){
        let index = this.products.findIndex(p => p.id === id);
        (index === -1)?(console.log("No se encuentra el producto")):(this.products.splice(index,1));
    }


    searchById(id) {
        let product = this.products.find(product => product.id == id);
        return product ? product : null;  

    }
    
    searchByName(name){
        let products = this.products.filter(product => product.name == name);
        return products ? products : null;   
    }
    searchByPrice(price){
        let products = this.products.filter(product => product.price == price);
        return products ? products : null;  
    }

    orderArray() {
        this.products.sort((p1, p2) => Number(p1.id) - Number(p2.id));
    }

    get listOfProduct (){
        return this.products;
    }
    
}

export default RepositoryCrudProduct;

