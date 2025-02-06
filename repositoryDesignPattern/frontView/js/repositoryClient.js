import InterfaceRepository from "./interfaceRepository.js";

class RepositoryClient extends InterfaceRepository {
    constructor(products){
        super();
        this.products = products;

    }

    searchById(id) {
        let product = this.products.find(product => product.id == id);

        return product ? product : null;  
    }
    

    orderedInsertion(product) {
       
    }

    update(product) {
        
    }

    delete(id){}


    
    searchByName(name){}
    searchByPrice(price){}
    
}

export default RepositoryClient;

