// @flow
import {generateJson} from './client2server.js'
import html from './html.js'
import {send} from './websocket.js'

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

const parseChat = (text: string): rawHTML => text.replace(/>>(\d+)/, '<a href="#message$1">>>$1</a>')

const parseTime = (from: string, to: string, limit: string): string => {
  const f = new Date(from)
  const t = new Date(to)
  const zeropad = num => String(num).padStart(2, '0')

  return `${t.getFullYear()}/${zeropad(t.getMonth())}/${zeropad(t.getDate())} ${zeropad(t.getHours())}:${zeropad(t.getMinutes())}'${zeropad(t.getSeconds())}`
}

const generateAgentChatMessage = (json: any): rawHTML => {
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

const generateAudienceChatMessage = (json: any): string =>
  `<div class="chat--item ${json.chatIsMine ? 'me' : ''} ${channels[json.intensionalDisclosureRange]}">
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

const addChatEventListner = (): void => {
  html().publicTextarea.addEventListener('keyup', e => {
    const len = Array.of(...e.target.value).length

    if (len > 140) {
      html().publicChar.style.color = 'red'
      html().publicButton.disabled = true
    } else if (len <= 0 || html().publicCounter.dataset.counter === 'max') {
      html().publicChar.style.color = 'black'
      html().publicButton.disabled = true
    } else {
      html().publicChar.style.color = 'black'
      html().publicButton.disabled = false
    }
    html().publicChar.textContent = len
  })

  html().privateTextarea.addEventListener('keyup', e => {
    const len = Array.of(...e.target.value).length

    if (len > 140) {
      html().privateChar.style.color = 'red'
      html().privateButton.disabled = true
    } else if (len <= 0) {
      html().privateChar.style.color = 'black'
      html().privateButton.disabled = true
    } else {
      html().privateChar.style.color = 'black'
      html().privateButton.disabled = false
    }
    html().privateChar.textContent = len
  })

  html().limitedTextarea.addEventListener('keyup', e => {
    const len = Array.of(...e.target.value).length

    if (len > 140) {
      html().limitedChar.style.color = 'red'
      html().limitedButton.disabled = true
    } else if (len <= 0 || html().limitedCounter.dataset.counter === 'max') {
      html().limitedChar.style.color = 'black'
      html().limitedButton.disabled = true
    } else {
      html().limitedChar.style.color = 'black'
      html().limitedButton.disabled = false
    }
    html().limitedChar.textContent = len
  })

  html().publicButton.addEventListener('click', e => {
    e.target.disabled = true
    const text = html().publicTextarea.value

    if (text) {
      const data = {
        channel: 'public',
        text
      }

      send(generateJson(data, 'chat'))
    }

  })

  html().privateButton.addEventListener('click', e => {
    e.target.disabled = true
    const text = html().privateTextarea.value

    if (text) {
      const data = {
        channel: 'private',
        text
      }

      send(generateJson(data, 'chat'))
    }
  })

  html().limitedButton.addEventListener('click', e => {
    e.target.disabled = true
    const text = html().limitedTextarea.value

    if (text) {
      const data = {
        channel: 'werewolf',
        text
      }

      send(generateJson(data, 'chat'))
    }
  })
}

export {addChatEventListner, generateAgentChatMessage, generateAudienceChatMessage}
