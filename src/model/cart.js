// id,user_id,item_id,no.of_items, status:pending,

const sequelize =require('../config/database')

const {DataTypes}=require('sequelize');

const Cart=sequelize.define(
    'Cart',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        }
        id:{

        }
    }
)