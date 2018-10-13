const express= require('express');
const router =express.Router();
const guideServices = require('../services/guide.services');

router.post('/create', create);
router.get('/:id', getById);
router.get('/getByParam', getByParam);


module.exports=router;

function create (req, res, next) {
    guideServices.create(req.body)
    .then(item => res.json(item))
    .catch(err => next(err));   
};


function getById(req, res, next) {
    guideServices.getById(req.params.id)
    .then(item => item ? res.json(item) : res.sendStatus(404))
    .catch(err => next(err));
}


function getByParam(req, res, next){
    guideServices.getByParam(req.body)
    .then(items => res.json(items))
    .catch(err => next(err));
}
