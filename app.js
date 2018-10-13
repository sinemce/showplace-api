const rootpath = require('rootpath');
rootpath();
const bodyParser= require('body-parser');
const express = require('express');
const app=express();
const morgan=require('morgan');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use('/place', require('./controller/place.controller'));
app.use('/category', require('./controller/category.controller'));
app.use('/visitor', require('./controller/visitor.controller'));


const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

