const mongoose = require('mongoose');


const programmingLanguageSchema = new mongoose.Schema({name: String});
const languageSchema = new mongoose.Schema({name: String});
const toolSchema = new mongoose.Schema({name: String});
const locationSchema = new mongoose.Schema({name: String});
const streamSchema = new mongoose.Schema({name: String});


exports.ProgrammingLanguage = mongoose.model('ProgrammingLanguage',programmingLanguageSchema);
exports.Language = mongoose.model('Language',languageSchema);
exports.Tool = mongoose.model('Tool',toolSchema);
exports.Location = mongoose.model('Location',locationSchema);
exports.Stream = mongoose.model('Stream',streamSchema);
