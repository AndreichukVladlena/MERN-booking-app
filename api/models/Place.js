const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    title: String,
    address: String, 
    photos: [String],
    description: String, 
    perks: [String],
    extraInfo: String,
    chackIn: Number,
    chackOut: Number,
    maxGuests: Number,
});

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel;