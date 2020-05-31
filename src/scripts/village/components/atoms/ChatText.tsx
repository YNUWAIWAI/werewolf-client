import * as React from 'react'
import {idGenerator} from '../../util'

const getChunkId = idGenerator()

const parseChat = (text: string, navigatable: boolean) => text
  .split(/(?:\n|\r)+/)
  .map(chunk => {
    const parsedText = chunk
      .split(/(?<id>>>\d+)/)
      .map(t => {
        const match = (/>>(?<id>\d+)/).exec(t)

        if (match && match.groups) {
          const id = match.groups.id

          return (
            <a
              href={`#message${id}`}
              key={`#message${id}`}
              tabIndex={navigatable ? 0 : -1}
            >
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
  readonly navigatable: boolean
  readonly text: string
}

export const ChatText: React.FC<Props> = props => (
  <div className="vi--chat--text">
    {parseChat(props.text, props.navigatable)}
  </div>
)
ChatText.displayName = 'ChatText'
