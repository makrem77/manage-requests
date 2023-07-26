const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    fullName:       {type: String, required: true},
    email:          {type: String, required: true},
    requestType:    {type: String, required: true, enum : ['RECLAMATION','AUTRE'], default: 'RECLAMATION'},
    description:    {type: String, required: true},
    reply:          {type: String, required: true},
    isReplied:      {type: Boolean, required: true},
    date:           {type: String, required: true},

});
module.exports = mongoose.model('Request', requestSchema);
