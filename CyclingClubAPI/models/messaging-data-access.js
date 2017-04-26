/**
 * Created by mshahhat on 26/04/2017.
 */
var Promise = require('promise');
var dataModel = require('./data-models.js');

var messagingDataAccess;

var createConversation = function (conversation) {
    var conv = new dataModel.conversation(conversation);
    conv.save(function (err) {
        if (err) throw err;
        console.log('Conversation added successfully.');
    });
};

var addMessage = function (senderId, senderName, receiverId, msgString) {
    dataModel.conversation.findById({
        firstMember: senderId,
        secondMember: receiverId
    }, function (err, conv) {
        if (err) throw err;
        var msg;
        msg.sendDate = new Date();
        msg.sender = senderName;
        msg.messageContent = msgString;
        var result = conv;
        if (result.isNullOrUndefined()) {
            dataModel.conversation.findById({
                firstMember: receiverId,
                secondMember: senderId
            }, function (err, conv) {
                if (err) throw err;
                result = conv;
                if (result.isNullOrUndefined()) {
                    conv = new dataModel.conversation();
                    conv.id = conversationId;
                }
            });
        }
        result.messages.push(msg);
        result.save(function (err) {
            if (err) throw err;
            console.log('Conversation successfully updated.');
        })
    })
};

var getConversationById = function (conversationId) {
    return new Promise(function (resolve, reject) {
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
    createConversation: createConversation,
    addMessage: addMessage,
    getConversationById: getConversationById
};
module.exports = messagingDataAccess;