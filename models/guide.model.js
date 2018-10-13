const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const now = new Date();

const schema = new Schema({
    placeId: [{
        type: Schema.Types.ObjectId,
        ref: 'Place',
      }] ,
    isUsed: { type: Boolean, require: true},
    userCount: { type: Number, require: true},
    total: { type: Number, required: true }, 
    year: { type: String, default: now.getFullYear(), required: true },
    month: { type: String, default: now.getMonth(),  required: true },   
    createdDate: { type: Date, default: Date.now }
},
{ timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Guide', schema);
