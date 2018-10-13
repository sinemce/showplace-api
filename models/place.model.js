const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    placeName: { type: String, require: true},
    location: { type: String, required: true },  
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'category',
      }] ,
    createdDate: { type: Date, default: Date.now }
},
{ timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('places', schema);
