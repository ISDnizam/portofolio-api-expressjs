const mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    title: String,
    description: String,
    category : String,
    image: String,
    year : Number,
    url : String,
    viewer :Number
    });
dataSchema.path('_id'); 
mongoose.model('project', dataSchema)