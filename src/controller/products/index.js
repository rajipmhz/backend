const {
  createProduct,
  ListProduct,
  DeleteProduct,
  getProductById,
  updateProduct,
  getSingleProduct
} = require('../../services/products');

//created products
const createProuctController = async (req, res, next) => {
  try {
    const { name, description, price, categories, image } = req.body;
    const vendorId = req.user.id;

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Name and price are required'
      });
    }

    const product = await createProduct({
      name,
      description,
      price,
      categories,
      image,
      vendorid: vendorId
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    next(error);
  }
};

//list product
const ListProductController = async (req, res, next) => {
  try {
    const vendorid = req.user.id;
    const {limit,page} = req.query;
    const products = await ListProduct({vendorid},limit,page);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products || []
    });
  } catch (error) {
    next(error);
  }
};

//get product by id
const getProductByIdController = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const vendorid = req.user.id;
    const product = await getSingleProduct({id: productId, vendorid});

    if (!product) { 
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  }
  catch (error) {
    next(error);
  }
};
//update product
const updateProductController = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const vendorId = req.user.id;

    const isUpdated = await updateProduct(productId, vendorId, req.body);

    if (!isUpdated) {
      return res.status(404).json({
        success: false,
        message: 'Product not found or not authorized'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE PRODUCT
 */
const DeleteProductController = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const vendorId = req.user.id;

    const isDeleted = await DeleteProduct(productId, vendorId);

    if (!isDeleted) {
      return res.status(404).json({
        success: false,
        message: 'Product not found or not authorized'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

//customer part 
const getallProductsController = async (req,res,next)=>{
  try{
    const {limit,page}=req.query;
    const products=await ListProduct({},limit,page);
    res.status(200).json({
      success:true,
      message:'Products fetched successfully',
      data:products||[]
    })
  }
  catch(error){
    next(error);
  }
}

const getSingleProductController = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await getSingleProduct({id: productId});
    res.status(200).json({
      success:true,
      message:'Products fetched successfully',
      data:product||[]
    })
  } catch (error) {
    next(error)
  }
}
//customer part


module.exports = {
  createProuctController,
  ListProductController,
  getProductByIdController,
  updateProductController,
  DeleteProductController,
  getallProductsController,
  getSingleProductController
};

