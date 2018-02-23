import Channels from '../constants/Channels'
import React from 'react'

const parseChat = text => text.replace(/>>(\d+)/, '<a href="#message$1">>>$1</a>')
const parseTime = (from, to, limit) => {
  const f = new Date(from)
  const t = new Date(to)
  const zeropad = num => String(num).padStart(2, '0')
  const postTime = `${t.getFullYear()}/${zeropad(t.getMonth() + 1)}/${zeropad(t.getDate())} ${zeropad(t.getHours())}:${zeropad(t.getMinutes())}'${zeropad(t.getSeconds())}`
  const distance = f.getTime() + limit * 1000 - t.getTime()
  const restTime = `${zeropad(Math.floor(distance / (60 * 1000)))}'${zeropad(Math.floor(distance / 1000 % 60))}`

  return `${postTime}（残り${restTime}）`
}

export default function ChatItem(props) {
  return (
    <div id={Channels[props.intensionalDisclosureRange] === 'public' ? `message${props.chatId}` : undefined} class={`chat--item ${props.chatIsMine ? 'me' : ''} ${Channels[props.intensionalDisclosureRange]}`}>
      <div class="chat--arrow-box">
        <div class="chat--num">{Channels[props.intensionalDisclosureRange] === 'public' && props.chatId}</div>
        <div class="chat--text">
          {parseChat(props.chatText)}
        </div>
        <div class="chat--date">
          {parseTime(props.phaseStartTime, props.serverTimestamp, props.phaseTimeLimit)}
        </div>
      </div>
      <div class="chat--icon">
        <img src={props.chatAgent.chatAgentImage} />
        <span>{props.chatAgent.chatAgentName.ja}</span>
      </div>
    </div>
  )
}
