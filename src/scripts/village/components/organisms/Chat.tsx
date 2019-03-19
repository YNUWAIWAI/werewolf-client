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
export interface State {
  atBottom: boolean
}

export default class Chat extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      atBottom: true
    }
  }
  public componentDidMount() {
    this.scrollToBottom()
  }

  public componentDidUpdate() {
    if (this.state.atBottom) {
      this.scrollToBottom()
    }
  }

  private chat = React.createRef<HTMLDivElement>()

  public handleScroll() {
    const elem = this.chat.current

    if (!elem) {
      return
    }
    this.setState({
      atBottom: elem.scrollHeight <= elem.clientHeight + elem.scrollTop
    })
  }

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
        onScroll={() => this.handleScroll()}
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
