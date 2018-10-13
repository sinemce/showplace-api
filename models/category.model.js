const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, require: true},   
    createdDate: { type: Date, default: Date.now }
},
{ timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('category', schema);
