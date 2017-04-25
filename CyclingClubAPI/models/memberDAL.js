var Member=(function()
{var mongoose = require('mongoose');
var dbModel=require('./data-models');
var member=dbModel.members;

var db=dbModel.dbConnection;
var Add=function(obj){
var Query = {'_id':obj._id};
var operator={'$set':{'name':obj.name,'picture':obj.picture}};
var options={'upsert':true};
member.update(Query,operator,options,function(err,numofRows){
if(err)throw err;
console.log(numofRows);
return true;
});
};

db.on('error',err=>{ console.error.bind(console, 'connection error:');
throw err;});

return Add;
}());

module.exports =Member;