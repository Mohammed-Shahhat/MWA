/**
 * Created by mshahhat on 26/04/2017.
 */
const util = require('util');
var Promise = require('promise');
var dataModel = require('./data-models.js');

var messagingDataAccess;

var addMessage = function (senderId, senderName, receiverId, msgString) {
    var firstMember;
    var secondMember;
    if (senderId < receiverId) {
        firstMember = senderId;
        secondMember = receiverId;
    } else if (receiverId < senderId) {
        firstMember = receiverId;
        secondMember = senderId;
    }
    var msg = {
        sendDate: new Date(),
        sender: senderName,
        messageContent: msgString
    };
    var query = {_id: {firstMember: firstMember, secondMember: secondMember}};

    var operator = {'$push': {'messages': msg}};
    var options = {'upsert': true};

    dataModel.conversation.update(query, operator, options, function (err, noOfRowsChanged) {
        if (err) throw err;
        console.log(noOfRowsChanged + " rows changed.");
    });
};

var getConversationById = function (sender, receiver) {
    return new Promise(function (resolve, reject) {
        var firstMember;
        var secondMember;
        if (sender < receiver) {
            firstMember = sender;
            secondMember = receiver;
        } else if (receiver < sender) {
            firstMember = receiver;
            secondMember = sender;
        }
        var conversationId = {
            firstMember: firstMember,
            secondMember: secondMember
        };
        dataModel.conversation.findById(conversationId, function (err, conv) {
            if (err) {
                reject("No data found!");
                throw err;
            }
            resolve(conv);
        })
    });

};

messagingDataAccess = {
    addMessage: addMessage,
    getConversationById: getConversationById
};
module.exports = messagingDataAccess;