const express = require('express');

const {addToCartController, updateCartItemController, deleteCartItemController} = require('../../controller/cart');

const router = express.Router();

router.post('/', addToCartController);
router.put('/:id', updateCartItemController);
router.delete('/:id', deleteCartItemController);

module.exports = router;
