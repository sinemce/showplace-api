const db = require('../config/db');
const Category = db.Category;

module.exports = { 
    create,  
    getById,
    getAll
};

async function create(param){
    const newCategory=new Category(param);
    return await newCategory.save();
}

async function getById(id){
    return await Category.findById(id);
}


async function getAll(){
    return await Category.find();
}





