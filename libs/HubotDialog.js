const logger = require("winston");

class HubotDialog {
  constructor(options) {
    this.options = options;
    this.text = options.text;
    this.message = options.message;
    this.dialog = options.dialog;
  }

  ask() {
    var self = this;
    self.message.reply(self.text);
    // return self so you can chain ask/listen methods
    return this;
  }

  listen(pattern, callback) {
    var self = this;
    var regex = new RegExp(pattern, 'i');
    self.dialog.addChoice(regex, (newMessage) => {
      callback(newMessage, self.dialog);
    });
    // return self so you can chain ask/listen methods
    return this;
  }
}

module.exports = HubotDialog;
