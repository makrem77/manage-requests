const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Request = require('./models/request')


const app=express();


mongoose.connect("mongodb+srv://makrem:g8sV3ifAipNAzGkV@cluster0.bhkurq3.mongodb.net/max-mean-stack?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connected to database successfully!");
    })
    .catch(()=>{
        console.log("failed to connect to database!");
    })

app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});





app.post('/requests',(req,res,next)=>{
    const request = new Request({
        fullName: req.body.fullName,
        email: req.body.email,
        requestType: req.body.requestType,
        description: req.body.description,
        reply: req.body.reply,
        isReplied: req.body.isReplied,
        date: req.body.date,

    });
    request.save().then(response => {
        res.status(201).json({
            message: "request added successfully"
        })
    });
});

app.get('/requests' ,(req,res,next)=>{
    Request.find()
        .then(documents => {
            res.status(200).json(documents);
        });
    
});
app.delete('/requests/:id', (req, res, next) => {
    const requestId = req.params.id;
  
    Request.findByIdAndRemove(requestId)
      .then((result) => {
        if (result) {
          res.status(200).json({ message: 'Request deleted successfully' });
        } else {
          res.status(404).json({ message: 'Request not found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Failed to delete request', error });
      });
  });
  app.put('/requests/:id', (req, res, next) => {
    const requestId = req.params.id;
    const reply = req.body.reply;
    const isReplied = req.body.isReplied;
  
    Request.findByIdAndUpdate(
      requestId,
      { reply: reply, isReplied: isReplied },
      { new: true } 
    )
      .then(updatedRequest => {
        res.status(200).json({
          message: 'Request updated successfully',
          request: updatedRequest
        });
      })
      .catch(error => {
        console.error('Error updating request:', error);
        res.status(500).json({ message: 'Request update failed' });
      });
  });



module.exports =  app;