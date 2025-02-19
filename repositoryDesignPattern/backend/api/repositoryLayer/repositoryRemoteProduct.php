<?php
require_once __DIR__ . "/../interfaceLayer/interfaceRemoteProduct.php"; 
require_once __DIR__ . "/../models/Product.php"; // Asegúrate de incluir la clase Product

class RepositoryRemoteProduct implements InterfaceRemoteProduct {
    private $products = array();

    public function loadProduct() {
        
        $xmlFile =  "../backend/products.xml";

        if (!file_exists($xmlFile)) {
            echo $xmlFile;
            die("Error: Archivo XML no encontrado.");
        }

        // Cargar XML
        $xml = simplexml_load_file($xmlFile);
        if ($xml === false) {
            die("Error: No se pudo cargar el XML.");
        }

        // Iterar sobre cada producto en el XML
        foreach ($xml->producto as $p) {
            $xmlProductId = (int) $p->id; // Convertir a número si es una cadena
            $xmlProductName = (string) $p->nombre;
            $xmlProductPrice = (float) $p->precio; // Convertir a número decimal si es necesario
            $xmlProductStatus = (int) $p->status;

            // Crear un nuevo objeto Product y agregarlo al array
            $xmlProduct = new Product($xmlProductId, $xmlProductName, $xmlProductPrice, $xmlProductStatus);
            $this->products[] = $xmlProduct; 
        }
    }

    public function uploadProduct($products)
    {
        
    }

    public function getData(){
        $jsonData = json_encode($this->products, JSON_PRETTY_PRINT);
        $this->products = [];
        return $jsonData;//$jsonData;
    }
}
?>
