const db = require('../config/db');
const Smile = db.Smile;

module.exports = { 
    create,  
    getById,
    getAll
};

async function create(param){
    const newVisitor=new Visitor(param);
    return await newVisitor.save();
}

async function getById(id){
    return await Visitor.findById(id);
}

async function getAll(){
    return await Visitor.find();
}

