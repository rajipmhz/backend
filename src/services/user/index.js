const { config } = require('dotenv');
const User=require('../../model/Users')
const bcrypt=require('bcryptjs');
const { encryptPassword } = require('../../utills/auth');
const createUser= async(userData)=>{
    try{
        // const hasedPassword=await encryptPassword(userData.password);
 const user=(await User.create({...userData,password:await encryptPassword(userData.password)})).toJSON();
 const {password,...userWithoutPassword}=user;    
//  console.log("userdata:",userData);
 return userWithoutPassword;   
}
catch(error){
    console.error('error creating user:',error);
} 
}
// const loginUser= async(email,password)=>{
//     try{
//         const user=await User.findOne({where:{email}});
//         if(!user){
//             throw new Error('User not found');
//         }
//         const isPasswordMatch=await bcrypt.compare(password,user.password);
//         if(!isPasswordMatch){
//             throw new Error('Invalid password');
//         }
//         const userData=user.toJSON();
//         const {password:pwd,...userWithoutPassword}=userData;
//         return userWithoutPassword;
//     }catch(error){
//         console.error('error logging in user:',error);
//     }  
// };

//part divide
// const findUserByEmail=async(email)=>{
//     const user=await User.findOne({where:{email}});
//     if(!user){
//         throw new Error('User not found');
//     }
//     return user;
// }

// const verifyPassword=async(inputPassword,hasedPassword)=>{
//     const isMatch=await bcrypt.compare(inputPassword,hasedPassword);

//     if(!isMatch){
//         throw new Error('Invaild password');
//     }
//     return true;
// }

// const sanitizeUser=(user)=>{
//     const userData=user.toJSON();
//     const {password,...userWithoutPassword}=userData;
//     return userWithoutPassword;
// }

// const loginUser=async(email,password)=>{
//     try{
//         const user=await findUserByEmail(email);
//         await verifyPassword(password,user.password);
//         return sanitizeUser(user);
//     }
//     catch(error){
//         console.error('Error logging in user:',error.message);
//         throw error;
//     }
// }

//sir part
const getUserEmail=async(email)=>{
    try{
        const user=await User.findOne({where:{email}});
        if(!user){
            return null;
        }
        return user
    }catch(error){
        console.error("Error fetching user by email",error);
    }
}
const loginUser= async(email,password)=>{
    try{
        
        const isPasswordMatch=await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            throw new Error('Invalid password');
        }
        const userData=user.toJSON();
        const {password:pwd,...userWithoutPassword}=userData;
        return userWithoutPassword;
    }catch(error){
        console.error('error logging in user:',error);
    }  
};

module.exports={
createUser,
loginUser,
getUserEmail
};