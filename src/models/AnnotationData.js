const mongoose = require('mongoose');
const AnnotationDataSchema = require('./src/index.js');

module.exports = mongoose.model('projeto', AnnotationDataSchema);