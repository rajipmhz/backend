const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const encryptPassword=async(password)=>{
     const salt=await bcrypt.genSalt(10);
 const hasedPassword =await bcrypt.hash(password,salt);
 return hasedPassword;
}

const verifyPassword=async(inputPassword,storedHashedPassword)=>{
    return await bcrypt.compare(inputPassword,storedHashedPassword);
}
const generateJWTToken=(user)=>{
    const token=jwt.sign({
        id:user.id,
        email:user.email,
        type:user.type,
    },
    process.env.JWT_SECRET,
    {
        expiresIn:process.env.JWT_EXPIRES_IN||'1d',
    })
    return token;
}
const verifyJWTToken=(token)=>{
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        return decoded;
    }catch(error){
        return null;
    }
}

module.exports={
    encryptPassword,
    verifyPassword,
    generateJWTToken, 
    verifyJWTToken,
};