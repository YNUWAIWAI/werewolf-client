// @flow
import React from 'react'

const parseTime = (from, to, limit) => {
  const f = new Date(from)
  const t = new Date(to)
  const zeropad = num => String(num).padStart(2, '0')
  const postTime = `${t.getFullYear()}/${zeropad(t.getMonth() + 1)}/${zeropad(t.getDate())} ${zeropad(t.getHours())}:${zeropad(t.getMinutes())}'${zeropad(t.getSeconds())}`
  const distance = f.getTime() + limit * 1000 - t.getTime()

  if (distance < 0) {
    return `${postTime}（残り00'00）`
  }
  const restTime = `${zeropad(Math.floor(distance / (60 * 1000)))}'${zeropad(Math.floor(distance / 1000 % 60))}`

  return `${postTime}（残り${restTime}）`
}

type Props = {
  from: string,
  limit: number,
  to: string
}

export default function ChatDate(props: Props) {
  return (
    <div className="chat--date">
      {parseTime(props.from, props.to, props.limit)}
    </div>
  )
}
