const Cart=require('../../model/cart');

const addToCart=async(cartData)=>{
    try{
        const cartItem=await Cart.create({...cartData});
        return cartItem;
    }catch(error){
        console.error('Error adding to cart:', error); // logs full Sequelize error
    throw new Error(`Error adding to cart: ${error.message}`);
    }

}


// const listCartItems=async(userId)=>{
//     try{
//         return await Cart.findAll({
//             where:{user_id:userId}
//         })
//     }catch(error){
//         console.error('List cart items error:',error);
//     }   
// }

const updateCartItem=async(cartItemId,updateData)=>{
    try{
        const [updatedCount]=await Cart.update(updateData,{ 
            where:{
                id:cartItemId
            }
        })
        return updatedCount>0;
    }catch(error){
        console.error('Update cart item error:',error);
    }
}

const deleteCartItem=async(cartItemId)=>{
    try{
        const deletedCount=await Cart.destroy({
            where:{
                id:cartItemId
            }
        })
        return deletedCount>0;
    }catch(error){
        console.error('Delete cart item error:',error);
    }
}   
module.exports={addToCart,updateCartItem,deleteCartItem};