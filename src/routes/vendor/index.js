const express =require('express');
const { createProuctController, ListProductController, DeleteProductController, getProductByIdController, updateProductController } = require('../../controller/products');

const router =express.Router();

router.post('/products',createProuctController);
router.get('/products',ListProductController)
router.get('/products/:id',getProductByIdController)
router.put('/products/:id',updateProductController)
router.delete('/products/:id', DeleteProductController);

module.exports=router;