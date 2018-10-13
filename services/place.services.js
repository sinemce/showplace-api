const db = require('../config/db');
const Place = db.Place;

module.exports = { 
    create,  
    update,
    getById,
    getByParam    
};

async function create(param){
    const newPlace=new Place(param);
    return await newPlace.save();
}

async function update(id, param){
    const place = await Place.findById(id);
    if(!place){
        return "ups! Place not found"
    }

    Object.assign(place, param);
    await place.save();
}


async function getById(id){
    return await Place.findById(id);
}

async function getByParam(param){
    return await Place.find(param);
}



async function nearPlaces(id, param){
    

}


// dashboard

