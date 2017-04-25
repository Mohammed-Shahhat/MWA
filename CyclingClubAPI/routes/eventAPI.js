var express = require('express');
var memberDAL=require('memberDAL');
var dbModel=require('./data-models');
var event=dbModel.event;
var db=dbModel.dbConnection;

router.get('/events', function (req, res, next) { //Listing /events
  var cursor= db.event.find();
   cursor.sort('_id.dueDate',1);
   cursor.toArray(function (err, docArray) {
           if (err) console.log("err :" + err);
        console.log(JSON.stringify(docArray));
        res.send(docArray);
    });
});

router.post('/Post',function(req,res,next){//save ,Update /Post
   event.save(req.body);
    res.send(true);
  });

router.put('/track',function(req,res,next){//Update Status and Location
  event.updateLocation(req.body);
});

router.put('/join',function(req,res,next){
  event.addMember(req.body);
});

router.put('/Notify',function(req,res,next){//TODO send Notification to all users
  event.addNotification(req.body);
});

module.exports = router;
