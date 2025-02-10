import Product from './product.js';
import RepositoryClient from './repositoryClient.js';

let products = [];

function loadXMLDoc() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response 
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            getProductFromXml(this);
            initializeRepository();
        }
    };

    // employee.xml is the external xml file
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}

function getProductFromXml(xml) {
    let i;
    let xmlProduct = {};
    let xmlProductId = '';
    let xmlProductName = '';
    let xmlProductPrice = '';
    let xmlDoc = xml.responseXML;

    

    let x = xmlDoc.getElementsByTagName("producto");

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {

        xmlProductId = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        if(typeof(xmlProductId)==="string"){
            xmlProductId = Number(xmlProductId);
        }

        xmlProductName = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        xmlProductPrice = x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue;

        xmlProduct = new Product(xmlProductId, xmlProductName, xmlProductPrice);
        products.push(xmlProduct)

    }

}

function initializeRepository () {
    console.log(products);

    const repoClient = new RepositoryClient (products);
    let response = repoClient.searchById(1);
    (response!==null)?(console.log(response)):(console.log("No encontramos nada"));
    repoClient.orderArray();
    let p1 = new Product (1,"Mouse","1300");
    repoClient.orderedInsertion(p1);




}


loadXMLDoc();





