const db = require('../config/db');
const Category = db.Category;

module.exports = { 
    create,  
    getById,
    getByParam
};

async function create(param){
    const newCategory=new Category(param);
    return await newCategory.save();
}

async function getById(id){
    return await Category.findById(id);
}

async function getByParam(param){
    return await Category.find(param);
}






