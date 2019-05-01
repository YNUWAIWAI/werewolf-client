import * as React from 'react'
import {idGenerater} from '../../util'

const getChunkId = idGenerater('chunk')

const parseChat = (text: string) => text
  .split(/(?:\n|\r)+/)
  .map(chunk => {
    const parsedText = chunk
      .split(/>>\d+/)
      .map(t => {
        const match = (/>>(?<id>\d+)/).exec(t)

        if (match && match.groups) {
          const id = match.groups.id

          return (
            <a href={`#message${id}`} key={`#message${id}`}>
              {`>>${id}`}
            </a>
          )
        }

        return t
      })

    return (
      <p
        className="vi--chat--text--chunk"
        key={getChunkId()}
      >
        {parsedText}
      </p>
    )
  })

interface Props {
  readonly text: string
}

export default function ChatItem(props: Props) {
  return (
    <div className="vi--chat--text">
      {parseChat(props.text)}
    </div>
  )
}
