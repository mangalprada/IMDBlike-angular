/*jshint esversion: 6 */
const mongoose = require('mongoose');

var Actor = mongoose.model('Actor', {
    name: { type: String },
    sex: { type: Number },
    dob: { type: String },
    bio: { type: String }
});

module.exports = { Actor };
