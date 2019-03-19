import * as React from 'react'
import ChatDelimeter, {Props as ChatDelimeterProps} from '../atoms/ChatDelimeter'
import ChatItem, {Props as ChatItemProps} from '../molecules/ChatItem'

export interface StateProps {
  readonly allIds: string[]
  readonly byId: {
    [id: string]: (ChatDelimeterProps & {type: 'delimeter'}) | (ChatItemProps & {type: 'item'})
  }
}
export type Props = StateProps

export default class Chat extends React.Component<Props, {}> {
  public componentDidMount() {
    this.scrollToBottom()
  }

  public componentDidUpdate() {
    const elem = this.chat.current

    if (!elem) {
      return
    }
    const isBottom = elem.scrollHeight <= (elem.scrollTop + elem.clientHeight)

    if (isBottom) {
      this.scrollToBottom()
    }
  }

  private chat = React.createRef<HTMLDivElement>()

  public scrollToBottom() {
    const elem = this.chat.current

    if (!elem) {
      return
    }

    elem.scrollTop = elem.scrollHeight
  }

  public render() {
    return (
      <div
        className="vi--chat"
        ref={this.chat}
      >
        {
          this.props.allIds.map(id => {
            const item = this.props.byId[id]

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
}
