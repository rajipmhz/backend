const sequelize=require('../config/database')

const {DataTypes}=require("sequelize");

const Product=sequelize.define(
    'Product',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        },
        vendorid:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:'users',
                key:'id',
            },
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
        },
        categories:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:[],
        },
        image:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        instock:{
            type:DataTypes.NUMBER,
            defaultValue:0,
        }
    },{
        tableName:'products',
        timestamps:true,
    }
)

module.exports=Product;