module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermission: 0,
  credits: "manhIT",
  description: "Noprefix",
  commandCategory: "noPrefix",
  usages: "[]",
  cooldowns: 5,
  usePrefix: false
};
module.exports.handleEvent = function ({ api, event, client, _GLOBAL}){
  var {threadID, messageID} = event;
  if (event.body.indexOf("bot")==0||
      event.body.indexOf("Bot")==0){
    var msg = {
      body: "ano ba? tawag nang tawag"
    }
    api.sendMessage(msg, threadID, messageID);
    api.sendMessageReaction("🖕", event.messageID,(err) => {}, true)
  }
}
module.exports.run = function ({ api, event, client, _GLOBAL}){
}
