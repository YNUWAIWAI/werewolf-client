import * as React from 'react'
import ChatDelimeter, {Props as ChatDelimeterProps} from '../atoms/ChatDelimeter'
import ChatItem, {Props as ChatItemProps} from '../molecules/ChatItem'

export interface StateProps {
  readonly allIds: string[]
  readonly byId: {
    [id: string]: (ChatDelimeterProps & {type: 'delimeter'}) | (ChatItemProps & {type: 'item'})
  }
}
export interface OwnProps {}
export interface Props extends StateProps, OwnProps {}

export default function Chat(props: Props) {
  return (
    <div className="chat">
      {
        props.allIds.map(id => {
          const item = props.byId[id]

          switch (item.type) {
            case 'item':
              return (
                <ChatItem
                  key={id}
                  {... item}
                />
              )
            case 'delimeter':
              return (
                <ChatDelimeter
                  key={id}
                  {... item}
                />
              )
            default:
              throw Error('Unexpected item type')
          }
        })
      }
    </div>
  )
}
