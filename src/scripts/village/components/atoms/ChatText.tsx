import * as React from 'react'
import {idGenerater} from '../../util'

const getChunkId = idGenerater('chunk')

const parseChat = (text: string) =>
  text
    .split(/(?:\n|\r)+/)
    .map(chunk => {
      const parsedText = chunk
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

      return (
        <p key={getChunkId()}>
          {parsedText}
        </p>
      )
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
