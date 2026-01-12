const { verify } = require("jsonwebtoken");
const httpError = require("../utills/httpError");
const { verifyJWTToken } = require("../utills/auth");

const isProtectedRoute=(req,res,next)=>{
    const {token}=req.cookies;
    // console.log('TOKEN',token);
    if(!token){
        return next(httpError('unauthorize:NO token is created',403));
    }
    const userData= verifyJWTToken(token);
    if(!userData){
        return next(httpError('unauthorized:Invalid token',403))
    }
    console.log('user data from token',userData)
    req.user=userData;
    next();
}

const isVendor=(req,res,next)=>{
    if(req.user.type!=='vendor'){
        return next(httpError('forbidden:Access is allowd for vendors only',403));
    }
    next();
}
const isCustomer=(req,res,next)=>{
    if(req.user.type!=='customer'){
        return next(httpError('forbidden:Access is allowd for customers only',403));
    }
    next();
}

module.exports={
    isProtectedRoute,
    isVendor,
    isCustomer
}