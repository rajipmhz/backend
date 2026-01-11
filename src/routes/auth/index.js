const express=require('express');
const { signupController,loginController } = require('../../controller/auth');

const router=express.Router();

//sample route for authentication

router.post('/signup',signupController);
router.post('/login',loginController);
module.exports=router;

