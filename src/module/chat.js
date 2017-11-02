const parseChat = text => text

const parseTime = time => time

const generateChatMessage = json =>
  `<div id="message4" class="chat--item private">
    <div class="chat--arrow-box">
      <div class="chat--num">${json.chatId}</div>
    <div class="chat--text">
      ${parseChat(json.chatText)}
    </div>
    <div class="chat--date">
      ${parseTime(json.serverTimestamp)}
    </div>
  </div>
  <div class="chat--icon">
    <img src="${json.chatAgent.chatAgentImage}">
    <span>${json.chatAgent.chatAgentName.ja}</span>
  </div>`

export {generateChatMessage}
