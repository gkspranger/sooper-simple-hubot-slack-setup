// Commands:
//   hubot jump - neat example using hubot-conversation

const HubotConversation = require("HubotConversation.js");
const HubotDialog = require("HubotDialog.js");
const logger = require("winston");

module.exports = function(robot) {
  var conversation = new HubotConversation(robot);
  conversation.listen(/jump/, (message, dialog) => {
    jumpDialog(message, dialog);
  });
};

var jumpDialog = (message, dialog) => {
  new HubotDialog({
    text: 'how many times ??',
    message,
    dialog
  }).ask()
  .listen(/([1-9][0-9]*)/, (m, d) => {
    var times = m.match[1];
    m.send(`you said ${times} times ..`);
    validateDialog(m, d);
  })
  .listen(/.*/, (m, d) => {
    m.send("sorry, i didn't understand .. next time use whole numbers (e.g. 123 times)");
  });
}

var validateDialog = (message, dialog) => {
  new HubotDialog({
    text: 'Is this correct ??',
    message,
    dialog
  }).ask()
  .listen(/yeah|yes|yup/, (m, d) => {
    m.send('you said YES :-)');
  })
  .listen(/nah|no|nope/, (m, d) => {
    m.send('you said NO :-(');
  });
};
