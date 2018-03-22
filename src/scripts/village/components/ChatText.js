// @flow
import React from 'react'

const parseChat = text =>
  text
    .split(/(>>\d+)/)
    .map(t => {
      if ((/>>\d+/).test(t)) {
        const id = (/>>(\d+)/).exec(t)[1]

        return (
          <a href={`#message${id}`} key={`#message${id}`}>
            {`>>${id}`}
          </a>
        )
      }

      return t
    })

type Props = {
  +text: string
}

export default function ChatItem(props: Props) {
  return (
    <div className="chat--text">
      {parseChat(props.text)}
    </div>
  )
}
