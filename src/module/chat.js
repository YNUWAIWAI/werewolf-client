const channels = {
  anonymousAudience: 'public',
  grave: 'grave',
  hunter: 'limited',
  master: 'master',
  onymousAudience: 'public',
  private: 'private',
  public: 'public',
  seer: 'limited',
  werewolf: 'limited'
}

const parseChat = text => text.replace(/>>(\d+)/, '<a href="#message$1">>>$1</a>')

const parseTime = time => time

const generateChatMessage = json =>
  `<div id="message${json.chatId}" class="chat--item ${json.chatIsMine ? 'me' : ''} ${channels[json.intensionalDisclosureRange]}">
    <div class="chat--arrow-box">
      <div class="chat--num">${json.chatId || ''}</div>
      <div class="chat--text">
        ${parseChat(json.chatText)}
      </div>
      <div class="chat--date">
        ${parseTime(json.serverTimestamp)}
      </div>
    </div>
    <div class="chat--icon">
      <img src="${json.chatAgent ? json.chatAgent.chatAgentImage : json.chatUserAvatar}">
      <span>${json.chatAgent ? json.chatAgent.chatAgentName.ja : json.chatUserName}</span>
    </div>
  <div>`

export {generateChatMessage}
