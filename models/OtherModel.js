const mongoose = require('mongoose');

const otherModelSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
});

module.exports = mongoose.model('OtherModel', otherModelSchema);
