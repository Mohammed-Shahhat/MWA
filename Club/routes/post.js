var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});
/* GET home page. */
router.post('/', function (req, res, next) {
    var dbconnection = req.app.locals.db;
    console.log(req.body);
    dbconnection.bind('test');
    dbconnection.test.insert(req.body, function (err, data) {
        if (err)
            console.log(err)
        console.dir(data);
        res.end();
    });
});

router.get('/:id', function (req, res, next) {

   // "_id" : ObjectId("58ffeb8c26bf5e5ab45f14bd")
   var obj_id = new ObjectID(req.params.id);

   getData({req:req,res:res},{"_id":obj_id}).then(function(data){
        res.json(data);
   }).catch(function(err){
        res.write(err);
   });
});

router.get('/', function (req, res, next) {
   getData({req:req,res:res},{}).then(function(data){
        res.json(data);
   }).catch(function(err){
        res.write(err);
   });
});


function getData(httpobj,query){
    var result =[];
    console.log(query);
    return new Promise(function(resolve,reject){
    var dbconnection = httpobj.req.app.locals.db;
    dbconnection.bind('test');
    dbconnection.test.find(query).limit(3).each(function (err, data) {
        if (err) {
            console.log(err);
            throw err;
            reject('No Data Found');
        }
        else {
            if (data == null)
                dbconnection.close();
            else {
                console.log('data ' + JSON.stringify(data));
                 result.push(data);
                 console.log(result.length);
            }
            resolve(result);
        }
    });
});
}

module.exports = router;
