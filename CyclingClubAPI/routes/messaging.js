/**
 * Created by mshahhat on 26/04/2017.
 */
const util = require('util');
var messagingDataAccess = require('../models/messaging-data-access');
var express = require('express');
var router = express.Router();

router.get('/', function (request, response, next) {
    var sender = request.param('sender');
    var receiver = request.param('receiver');
    messagingDataAccess.getConversationById(sender,receiver).then(function (data) {
        response.send(data);
    })
});


router.post('/', function (request, response, next) {
    var reqBody = request.body;
    messagingDataAccess.addMessage(reqBody.senderId, reqBody.senderName, reqBody.receiverId, reqBody.message);
    response.send("Message added.");
});

module.exports = router;