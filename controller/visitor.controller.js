const express= require('express');
const router =express.Router();
const visitorServices = require('../services/visitor.services');

router.post('/create', create);
router.get('/getById', getById);
router.get('/getAll', getAll);


module.exports=router;


function getAll(req, res, next){
    visitorServices.getAll()
    .then(items => res.json(items))
    .catch(err => next(err));
}

function create (req, res, next) {
    visitorServices.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));   
};


function getById(req, res, next) {
    visitorServices.getById(req.params.id)
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}

