var express = require('express');
var AddMember=require('memberDAL');
var router = express.Router();

router.put('/SaveMember', function(req, res, next) {//Add update Member
  AddMember();
});
module.exports = router;