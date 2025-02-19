<?php
    class Product {
        public $id;
        public $name;
        public $price;
        public $status;

        public function __construct($id, $name, $price,$status) {
            $this->id = $id;
            $this->name = $name;
            $this->price = $price;
            $this->status = $status;
        }
    }
?>