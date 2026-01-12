const Products=require('../../model/products');

const createProduct=async(productData)=>{
    try{
        const product=await Products.create({...productData});
        return product;
    }catch(error){
        throw new Error('Error creating product:',error);
    }
}

//own
const ListProduct=async(product)=>{
    try{
    const items=await Products.findAll({where:{product}});
    if(!product){
        return null;
    }
    return items
    }
    catch(error){
        console.error("Error fetching product ",error);
    }
}
module.exports={
    createProduct,
    ListProduct,
}