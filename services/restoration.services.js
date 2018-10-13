const math = require('mathjs');
const db = require('../config/db');
const Restoration = db.Restoration;

module.exports = { 
    create,  
    getById,
    getByParam
};

async function create(param){    
    const rest =await Restoration.findOne({ placeId: param.placeId });
    
    if (rest) { //update exist data        
        param.userCount=math.sum(rest.userCount, param.userCount);  
        param.total = math.sum(rest.total, param.total); 
        Object.assign(rest, param);
        await rest.save();
    }
    else{ //  create new
        const newRestoration=new Restoration(param);
        newRestoration.userCount=Number(1);
        return await newRestoration.save();
    }   
}

async function getById(id){
    return await Restoration.findById(id);
}

async function getByParam(param){
    return await Restoration.find(param);
}
