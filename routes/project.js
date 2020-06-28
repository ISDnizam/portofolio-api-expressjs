'use strict';
module.exports = function(app,Project) {
    var response = require('../res');

    app.get('/projects', (req,res) => {
        Project.find().then((data) => {
            response.ok(data, res);
        })
    });
    
    app.get('/project/:id',(req,res) =>{
        Project.findById(req.params.id).then((data) =>{
            if(data){
                response.ok(data, res);
            }else{
                response.failed('Project is not found', res);
            }
        }).catch((err) => {
                response.failed('Project is not found', res);
        })
    })
    app.post('/project/addProject', (req,res) => {
        var newProject = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            year: req.body.year,
            image: req.body.image,
        }
        var project = new Project(newProject);
        project.save().then(() => {
        response.ok(project, res);
        }).catch((err) => {
            response.failed('created failed ', res);
        })
        response.ok(newProject, res);
    });
    
    app.put('/project/update', (req,res) => {
        var newvalues = { $set: {title: req.body.title, category:req.body.category, description:req.body.description,year:req.body.year,image:req.body.image } };
        Project.findOneAndUpdate({_id: req.body.id}, newvalues).then((data)=>{
            response.ok(data, res);
         }).catch((err) => {
            response.failed('Deleted failed', res);
        })
    });
    

    app.delete('/project/delete', (req,res) => {
         Project.findOneAndRemove({_id: req.body.id}).then((data)=>{
            response.ok(data, res);
         }).catch((err) => {
            response.failed('Deleted failed', res);
        })
    })
    
};