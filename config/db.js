const mongoose = require('mongoose');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/showplace',  { useNewUrlParser: true });
  mongoose.set('debug', true);
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));

    module.exports={
      Place: require('../models/place.model'),
      Category: require('../models/category.model'),
      Visitor: require('../models/visitor.model'),
      Smile: require('../models/smile.model')
    };
 