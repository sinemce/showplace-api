const express= require('express');
const router =express.Router();
const visitorServices = require('../services/visitor.services');

router.post('/create', create);
router.get('/:id', getById);
router.post('/getByParam', getByParam);
router.get('/ageEnum',ageEnum);


module.exports=router;

function create (req, res, next) {
    visitorServices.create(req.body)
    .then(item => res.json(item))
    .catch(err => next(err));   
};


function getById(req, res, next) {
    visitorServices.getById(req.params.id)
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}


function getByParam(req, res, next){
    visitorServices.getByParam(req.body)
    .then(items => res.json(items))
    .catch(err => next(err));
}

function ageEnum(req, res, next){
    visitorServices.ageEnum()
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}