const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ 
    userName: String,
    password: String,
    userId: String
});

module.exports = mongoose.model('User', UserSchema);