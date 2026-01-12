const express =require('express');
const { createProuctController, ListProductController } = require('../../controller/products');

const router =express.Router();

router.post('/products',createProuctController);
router.get('/product',ListProductController)

module.exports=router;