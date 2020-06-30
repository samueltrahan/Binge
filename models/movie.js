const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', MovieSchema);