const logger = require("winston");
const Conversation = require('hubot-conversation');

class HubotConversation {
    constructor(robot) {
        this.robot = robot;
    }

    listen(pattern, callback) {
      var self = this;
      var conversation = new Conversation(self.robot);
      var regex = new RegExp(pattern, 'i');
      self.robot.respond(regex, (message) => {
        var dialog = conversation.startDialog(message);
        callback(message, dialog);
      });
    }
}

module.exports = HubotConversation;
