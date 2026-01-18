const {addToCart,updateCartItem,deleteCartItem}=require('../../services/cart');

const addToCartController=async(req,res,next)=>{
    try{
        const userId=req.user.id;
        const cartData={...req.body,user_id:userId};
        console.log("cartdata",cartData);
        const cartItem=await addToCart(cartData);
        res.status(201).json({
            success:true,
            data:cartItem,
            message:'Item added to cart successfully'
        });
    }catch(error){
        next(error);
    }   
}

// const getCartItemsController=async(req,res,next)=>{
//     try{
//         const userId=req.user.id;
//         const cartItems=await getCartItems(userId);
//         res.status(200).json({
//             success:true,
//             data:cartItems
//         });
//     }catch(error){
//         next(error);
//     }
// }

const updateCartItemController=async(req,res,next)=>{   
    try{
        const cartItemId=req.params.id;
        const updateData=req.body;
        const isUpdated=await updateCartItem(cartItemId,updateData);
        if(!isUpdated){
            return res.status(404).json({
                success:false,
                message:'Cart item not found'
            });
        }
        res.status(200).json({
            success:true,
            message:'Cart item updated successfully'
        });
    }   
    catch(error){
        next(error);
    }
}

const deleteCartItemController=async(req,res,next)=>{
    try{
        const cartItemId=req.params.id;
        const isDeleted=await deleteCartItem(cartItemId);
        if(!isDeleted){
            return res.status(404).json({
                success:false,
                message:'Cart item not found'
            });
        }
        res.status(200).json({
            success:true,
            message:'Cart item deleted successfully'
        });
    }catch(error){
        next(error);
    }
}
module.exports={addToCartController,updateCartItemController,deleteCartItemController};