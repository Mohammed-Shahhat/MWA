var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose= require('mongoose');

//schema for clubs
// var schema = new mongoose.Schema({ name:String , city:String, state:String, members:[{userId:String,
//   memberName:String, city:String, state:String, location:{ type:[Number],index:'2d' }}], });

var schema = new mongoose.Schema({ name:String , city:String, state:String,post:String,members:[{name:String,email:String }], coords:{lat:Number, lng:Number}});

var clubNew = mongoose.model('Clubs',schema);

//var ride1= new club({name:'ride1',logo:'/image1',location:[-91.4,-92.3]});
//var ride2= new club({name:'ride2',logo:'/image2',location:[-97.4,-90.3]});

//var club1 = new club({namre:'rangers',city:})



//set the CORS request headers

 router.all('*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
 })

 router.get('/:id', function (req, res, next) {

 var obj_id = mongoose.Types.ObjectId;
   id=new obj_id(req.params.id);
 console.log(obj_id);
   query= {_id :id};
//   clubNew.find({}).exec(function(err,data){
//     res.json(data);
//   })

clubNew.find(query).exec(function(err,data){
    res.json(data);
})

console.log('router');
});

router.get('/',function(req,res,next){
       clubNew.find({}).exec(function(err,data){
         res.json(data);
       })
})

// router.get('/', function(req, res, next) {
//     var longitude= req.query.longitude;
//     var latitude= req.query.latitude;
//     var userId =req.query.userId;
//     console.log( userId);
    
// //{$and: [{location:{$near:[longitude,latitude],$maxDistance:2}},{"members":{$not:{$elemMatch:{'name':name}}}}]}
//   //{$and: [{location:{$near:[-91.9591732,41.0133108],$maxDistance:2}},{members:{$not:{$elemMatch:{'userId':'PIENImwpDLbLjasKnxocaa690X94hHir'}}}]}
//   clubNew.find({$and: [{location:{$near:[longitude,latitude],$maxDistance:2}},{members:{$not:{$elemMatch:{'userId':userId}}}}]}).exec(function(err,clubs){
//        // if(err) console.log()
//       // clubs.forEach(()=>{console.log(this['members']['name']);})
//        if(clubs!=null){
//         // clubs.forEach((d)=>console.log(d));
//        res.json(clubs);
//       }
//       else{res.json([]);}
       
//   });  
// });

// //{"members":{$not:{$elemMatch:{'name':name}}}}
// //display the joined clubs
// //{"members":{$elemMatch:{'userId':'PIENImwpDLbLjasKnxocaa690X94hHir'}}}
// router.get('/joined',function(req,res,next){
//   var userId =req.query.userId;
//      clubNew.find({"members":{$elemMatch:{'userId':userId}}}).limit(5).exec(function(err,clubs){
//               if(clubs!=null){
//               res.json(clubs);
//       }
//             res.end('no clubs found');
//      })
// });

///update the members

router.put('/',function(req,res,next){
      var clubId= req.query.clubId;
      console.log(clubId);
      var userId= req.body.userId;
      var memberName= req.body.memberName;
         console.log("member is: "+memberName);
         console.log(req.body);
      var state= req.body.state;
      var city = req.body.city;
      
      var latitude= req.body.location;
      console.log(latitude);
      var longitude= req.body.location;
      var ObjectId= mongoose.Types.ObjectId
      var query= {_id:ObjectId(clubId)};
      console.log('new object id: '+ ObjectId(clubId));
      // clubNew.find(query).exec(function(err,data){
      //  console.log('printing updates');
      //  console.dir(data);
     // })
      //console.log(req.body);
      var operator2={$set:{state:'California'}};
      //club {_id: ObjectId('58fff6fe9a80bb37a80e0ca6')}  
      //{$push:{members:{'userId':'hgfn','memberName':'jack', 'city':'springield','state':'texas','location':[12,13]}}}
//{_id: ObjectId('58fff6fe9a80bb37a80e0ca6')},{$push:{members:{'userId':'hgfn','memberName':'jack', 'city':'springield','state':'texas','location':[12,13]}}}
var operator={$push:{members:{'userId':userId,'memberName':memberName, 'city':city,'state':state,'location':[23,44]}}};
  clubNew.update(query,operator, {upsert:true},function(err,numUpdate){
      if(err){
        console.log(err)
      }
      else{
        console.log('successfully added');
      }
  }) 

});


//create a new club

  router.post('/',function(req,res,next){
  //  console.log(req.body);
    //  var name=req.body.name;
   
    //  var location= req.body.location;
    //  var city = req.body.city;
    //  var state = req.body.state;
    //  //var logo= req.body.logo;
    //  var members= req.body.members;
    //  console.log(members);
    //   console.log('the logo name is: '+logo);
    //    console.log('the state name is: '+state);
     // console.log(path.join(__dirname ,logo));
      //var paths="C:\\Users\\user1\\Desktop\MUMCourses\\MWA\\CyclePoject\\src\\app\\images";
      console.log(req.body);
      var club1= new clubNew(req.body);

       club1.save(function(err){
          if(err) console.log('error');
            else console.log('saved the whole club data');
       });
    //  var logo =req.body.logo;
    // new club(req.body)
      
 });


///upload images



  router.get('/clubName', function(req,res,next){
      var name= req.query.name;
       var query= {'name':name};

       clubNew.find(query).exec(function(err,data){
             res.json(data);
       })

  })

module.exports = router;