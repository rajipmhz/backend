
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
// const ListProduct = async (vendorid) => {
//     try {
//         return await Products.findAll({ where: {id: vendorid },attributes:['name'] });
//     } catch (error) {
//         console.error(error);
//         throw new Error(`Error listing products: ${error.message}`);
//     }
// };

const ListProduct = async (attr, l, o) => {
  const limit = l ? l : null;
  const offset = o ? (o-1) * l : null
  return await Products.findAll({
    where: attr,
    limit,
    offset
  });
};

//get by id
const getSingleProduct=async(attr)=>{
  try{
    return await Products.findOne({
      where:{
       ...attr
      }
    })
  }catch(errror){
    console.error('Get product error:',error);
  }
}

const updateProduct=async(productId,vendorId,updateData)=>{
  try{
    const [updatedCount]=await Products.update(updateData,{
      where:{
        id:productId,
        vendorid:vendorId
      }
    })
    return updatedCount>0;
  }
  catch(error){
    console.error('update product error:',error);
  }
}

const DeleteProduct = async (productId, vendorId) => {
  try {
    const deletedCount = await Products.destroy({
      where: {
        id: productId,
        vendorid: vendorId
      }
    });
    return deletedCount > 0;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Error deleting product');
  }
};

module.exports={
    createProduct,
    ListProduct,
    DeleteProduct,
    getSingleProduct,
    updateProduct
}