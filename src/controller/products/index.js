
const {createProduct,ListProduct}=require('../../services/products/index')
const createProuctController=async(req,res)=>{
    const {name,description,price,categories,image}=req.body;
    const vendorid=req.user.id;
    if(!name||!price){
        return next(httpError('Name and price are required',400));
    }    
    const product = await createProduct({name,description,price,categories,image,vendorid:req.user.id})
    res.status(200).json({success:true,message:'product created successfully',data:product});
}
//own
const ListProductController=(req,res)=>{
    const data=req.body;
    return res.data;
}

module.exports={
    createProuctController,
    ListProductController
}


