import * as React from 'react'

const parseChat = (text: string) =>
  text
    .split(/(>>\d+)/)
    .map(t => {
      const match = (/>>(\d+)/).exec(t)

      if (match && match[1]) {
        const id = match[1]

        return (
          <a href={`#message${id}`} key={`#message${id}`}>
            {`>>${id}`}
          </a>
        )
      }

      return t
    })

interface Props {
  readonly text: string
}

export default function ChatItem(props: Props) {
  return (
    <div className="chat--text">
      {parseChat(props.text)}
    </div>
  )
}
