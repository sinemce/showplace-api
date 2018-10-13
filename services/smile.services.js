const math = require('mathjs');
const db = require('../config/db');
const Smile = db.Smile;

module.exports = { 
    create,  
    getById,
    getByParam
};

async function create(param){  
    const smile=await Smile.findOne({ placeId: param.placeId });    
    if (smile) { //update exist data        
        param.total = math.sum(smile.total,param.total);
        Object.assign(smile, param);
        await smile.save();
    }
    else{ //  create new
        const newSmile=new Smile(param);
        return await newSmile.save();
    }   
}

async function getById(id){
    return await Smile.findById(id);
}

async function getByParam(param){
    return await Smile.find(param);
}
