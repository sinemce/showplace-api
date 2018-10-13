const express= require('express');
const router =express.Router();
const categoryServices = require('../services/category.services');

router.post('/create', create);
router.get('/:id', getById);
router.get('/getAll', getAll);


module.exports=router;


function create (req, res, next) {
    categoryServices.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));   
}

function getById(req, res, next) {
    categoryServices.getById(req.params.id)
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}

function getAll(req, res, next){
    categoryServices.getAll()
    .then(items => res.json(items))
    .catch(err => next(err));
}
