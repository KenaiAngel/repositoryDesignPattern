<?php

    include_once __DIR__.'\api\repositoryLayer\repositoryRemoteProduct.php';
  
    $products = new RepositoryRemoteProduct();
    $products->loadProduct();
    echo $products->getData();

?>