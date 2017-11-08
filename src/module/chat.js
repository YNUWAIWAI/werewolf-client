// @flow
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

function parseChat(text: string): rawHTML {
  return text.replace(/>>(\d+)/, '<a href="#message$1">>>$1</a>')
}

function parseTime(from: string, to: string, limit: string): string {
  const f = new Date(from)
  const t = new Date(to)
  const zeropad = num => String(num).padStart(2, '0')

  return `${t.getFullYear()}/${zeropad(t.getMonth())}/${zeropad(t.getDate())} ${zeropad(t.getHours())}:${zeropad(t.getMinutes())}'${zeropad(t.getSeconds())}`
}

function generateAgentChatMessage(json: any): rawHTML {
  if (channels[json.intensionalDisclosureRange] === 'public') {
    return `
    <div id="message${json.chatId}" class="chat--item ${json.chatIsMine ? 'me' : ''} ${channels[json.intensionalDisclosureRange]}">
      <div class="chat--arrow-box">
        <div class="chat--num">${json.chatId}</div>
        <div class="chat--text">
          ${parseChat(json.chatText)}
        </div>
        <div class="chat--date">
          ${parseTime(json.phaseStartTime, json.serverTimestamp, json.phaseTimeLimit)}
        </div>
      </div>
      <div class="chat--icon">
        <img src="${json.chatAgent.chatAgentImage}">
        <span>${json.chatAgent.chatAgentName.ja}</span>
      </div>
    <div>`
  }

  return `
  <div class="chat--item ${json.chatIsMine ? 'me' : ''} ${channels[json.intensionalDisclosureRange]}">
    <div class="chat--arrow-box">
      <div class="chat--num"></div>
      <div class="chat--text">
        ${parseChat(json.chatText)}
      </div>
      <div class="chat--date">
        ${parseTime(json.phaseStartTime, json.serverTimestamp, json.phaseTimeLimit)}
      </div>
    </div>
    <div class="chat--icon">
      <img src="${json.chatAgent.chatAgentImage}">
      <span>${json.chatAgent.chatAgentName.ja}</span>
    </div>
  <div>`
}

function generateAudienceChatMessage(json: any): string {
  return `<div class="chat--item ${json.chatIsMine ? 'me' : ''} ${channels[json.intensionalDisclosureRange]}">
    <div class="chat--arrow-box">
      <div class="chat--num"></div>
      <div class="chat--text">
        ${parseChat(json.chatText)}
      </div>
      <div class="chat--date">
        ${parseTime(json.phaseStartTime, json.serverTimestamp, json.phaseTimeLimit)}
      </div>
    </div>
    <div class="chat--icon">
      <img src="${json.chatUserAvatar || ''}">
      <span>${json.chatUserName || ''}</span>
    </div>
  <div>`
}

export {generateAgentChatMessage, generateAudienceChatMessage}
