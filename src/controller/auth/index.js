const {createUser, loginUser,getUserEmail} =require('../../services/user');
const { verifyPassword, generateJWTToken } = require('../../utills/auth');
const httpError = require('../../utills/httpError');

const signupController=async(req,res,next)=>{
    //singup logic here
    const {name,email,password,type}=req.body;
    if(!name||!email||!password){
        return next(httpError("name , email and password are required",400));
    }
    const existingUser=await getUserEmail(email);
    if(existingUser){
        return(next(httpError('user with this email already exists',400)));
    }
    console.log("existing user",existingUser);
    const user=await createUser({name,email,password,type});
    res.status(200).json({
        success:true,
        message:'User signed up',
        data:user
    })
}
const loginController=async(req,res,next)=>{
const {email,password}=req.body;
//login logic here
if(!email||!password){
    return next(httpError('Email and password are required',400));
}
const user=await getUserEmail(email);

if(!user){
    return next(httpError('user not found',404));
}
const passwordMatched=await verifyPassword(password,user.password);
if(!passwordMatched){
    return next(httpError('wrong password',404));
}
const jwtToken =generateJWTToken(user);
res.cookie('token',jwtToken,{
    httpOnly:true,
    secure:false,
    maxAge:24*60*60*1000,
    samesite:'strict',
})
res.status(200).json({success:true,message:'userlogged in'})
}
module.exports={
signupController,
loginController
};