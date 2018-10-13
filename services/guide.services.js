const math = require('mathjs');
const db = require('../config/db');
const Guide = db.Guide;

module.exports = { 
    create,  
    getById,
    getByParam
};

async function create(param){  
    const guide = await Guide.findOne({ placeId: param.placeId, isUsed: param.isUsed }); 

    if (guide) { //update exist data    
        param.userCount = math.sum(guide.userCount , 1);
        param.total = math.sum(guide.total , param.total); 
        Object.assign(guide, param);
        await guide.save();
    }
    else{ //  create new
        param.userCount=Number(1);
        const newGuide=new Guide(param);        
        return await newGuide.save();
    }   
}

async function getById(id){
    return await Guide.findById(id);
}

async function getByParam(param){
    return await Guide.find(param);
}

