const mongoose = require('mongoose');

const TeamsModelSchema = mongoose.Schema({ 
    name: String,
    moves: String,
    types: String,
    pokeId: String
});

module.exports = mongoose.model('TeamsModel', TeamsModelSchema);