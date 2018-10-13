const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    placeId: [{
        type: Schema.Types.ObjectId,
        ref: 'Place',
      }] ,
    ageAverage: { type: String, require: true},
    totalCount: { type: Number, required: true },    
    createdDate: { type: Date, default: Date.now }
},
{ timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Visitor', schema);
