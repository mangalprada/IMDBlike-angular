/*jshint esversion: 6 */
const mongoose = require('mongoose');

var Movie = mongoose.model('Movie', {
    name: { type: String },
    year: { type: Number },
    plot: { type: String },
    // poster: {type:ImageBitmap},
    cast: { type: String }
});

module.exports = { Movie };
