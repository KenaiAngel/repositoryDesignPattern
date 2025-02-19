import InterfaceRemoteProduct from "../intarfaceLayer/interfaceRemoteProduct.js";

class RepositoyRemoteProduct extends InterfaceRemoteProduct {
    
    constructor(){
        super();
    }

    loadProduct(){
        return new Promise ((resolve,reject)=> {
                $.ajax({
                    url: '../backend/get-products.php', // Se conecta al servidor
                    type: 'GET',  // Método HTTP
                    success: (response) => {
                        console.log("Datos recibidos:", response);
                        const products = JSON.parse(response);
                        resolve(products);

                    },
                    error: function(xhr, status, error) {
                        reject("Error en la solicitud:"+ error);

                    }
                });
            }
        )

    }

}


export default RepositoyRemoteProduct;
