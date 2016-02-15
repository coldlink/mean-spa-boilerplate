var mongoose = require('mongoose');

//set up Data schema
module.exports = mongoose.model('Data', {
    name : {type : String, default: ''}
});
