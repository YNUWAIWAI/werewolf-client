import {Channels} from '../constants/Channels'
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
    <div className={`chat--item ${props.chatIsMine ? 'me' : ''} ${Channels[props.intensionalDisclosureRange]}`} id={Channels[props.intensionalDisclosureRange] === 'public' ? `message${props.chatId}` : undefined}>
      <div className="chat--arrow-box">
        <div className="chat--num">
          {Channels[props.intensionalDisclosureRange] === 'public' && props.chatId}
        </div>
        <div className="chat--text">
          {parseChat(props.chatText)}
        </div>
        <div className="chat--date">
          {parseTime(props.phaseStartTime, props.serverTimestamp, props.phaseTimeLimit)}
        </div>
      </div>
      <div className="chat--icon">
        <img src={props.chatAgent.chatAgentImage} />
        <span>
          {props.chatAgent.chatAgentName.ja}
        </span>
      </div>
    </div>
  )
}
