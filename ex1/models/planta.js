const mongoose = require('mongoose')

var plantaSchema = new mongoose.Schema({
    _id: Number,
    NúmerodeRegisto: Number,
    Códigoderua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Espécie: String,
    NomeCientífico: String,
    Origem: String,
    DatadePlantação: Date,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantação: String,
    Gestor: String,
    Datadeactualização: Date,
    Númerodeintervenções: Number
});

module.exports = mongoose.model('planta', plantaSchema)