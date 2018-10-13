const db = require('../config/db');
const Place = db.Place;

module.exports = { 
    create,  
    getById,
    getAll
};

async function create(param){
    const newPlace=new Place(param);
    return await newPlace.save();
}

async function getById(id){
    return await Place.findById(id);
}

async function getAll(){
    return await Place.find();
}

