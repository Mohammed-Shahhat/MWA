/**
 * Created by mshahhat on 26/04/2017.
 */
var messagingDataAccess = require('../models/messaging-data-access');
var express = require('express');
var router = express.Router();

router.get('/messages', function (request, response, next) {
    var convId = request.param('convId');
    messagingDataAccess.getConversationById(convId).then(function (data) {
        response.send(data);
    })
});

router.post('/messages', function (request, response, next) {

    var body = request.body;
    console.log(body);
    messagingDataAccess.addMessage(body.senderId, body.senderName, body.receiverId, body.message);
});

module.exports = router;