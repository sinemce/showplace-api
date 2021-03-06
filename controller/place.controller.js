const express= require('express');
const router =express.Router();
const placeServices = require('../models/place.model'); 

router.post('/create', create);
router.get('/:id', getById);
router.get('/getByParam', getByParam);


module.exports=router;

function create (req, res, next) {
    placeServices.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));   
}


function getById(req, res, next) {
    placeServices.getById(req.params.id)
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}

function getByParam(req, res, next){
    placeServices.getByParam(req.body)
    .then(items => res.json(items))
    .catch(err => next(err));
}
