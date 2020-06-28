const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./model/Project");
mongoose.connect('mongodb+srv://nizam-99:modifier1@cluster0-cr3nl.mongodb.net/book?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,'useFindAndModify': false },() => {
    console.log('DB  connected');
});
const Project = mongoose.model("project");


var routes = require('./routes/project');
routes(app, Project);
app.listen('5000',() => {
    console.log('server connected with port 5000');
})


