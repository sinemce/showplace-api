const db = require('../config/db');
const Visitor = db.Visitor;
const AgeEnum = require('../common/age.enum');

module.exports = { 
    create,  
    getById,
    getByParam,
    ageEnum
};

async function create(param){    
    const visit=await Visitor.findOne({ placeId: param.placeId, ageAverage: param.ageAverage });
    
    if (visit) { //update exist data        
        param.totalCount =Number(visit.totalCount) + Number(param.totalCount);
        Object.assign(visit, param);
        await visit.save();
    }
    else{ //  create new
        const newVisitor=new Visitor(param);
        return await newVisitor.save();
    }   
}

async function getById(id){
    return await Visitor.findById(id);
}

async function getByParam(param){
    return await Visitor.find(param);
}

async function ageEnum(){
    return await AgeEnum; 
}