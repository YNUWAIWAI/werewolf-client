import * as React from 'react'
import ChatDelimeter from '../atoms/ChatDelimeter'
import ChatItem from '../molecules/ChatItem'
import {village} from '../../types'

export interface StateProps {
  readonly allIds: village.ChatId[]
  readonly byId: {
    [id in village.ChatId]: {
      readonly id: village.Payload$ChatId
      readonly image: string
      readonly initial: string
      readonly intensionalDisclosureRange: village.Channel
      readonly isMarked: boolean
      readonly isMine: boolean
      readonly name: string
      readonly phaseStartTime: string
      readonly phaseTimeLimit: number
      readonly serverTimestamp: string
      readonly text: string
      readonly type: village.ChatItemType.item
    } | {
      readonly day: number
      readonly type: village.ChatItemType.delimeter
    }
  }
}
export interface DispatchProps {
  readonly handleStar: (id: village.ChatId) => (isMarked: boolean) => void
}
export interface Props extends StateProps, DispatchProps {}
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

  public shouldComponentUpdate() {
    return true
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
                    handleStar={this.props.handleStar(id)}
                    id={item.id}
                    image={item.image}
                    initial={item.initial}
                    intensionalDisclosureRange={item.intensionalDisclosureRange}
                    isMarked={item.isMarked}
                    isMine={item.isMine}
                    key={id}
                    name={item.name}
                    phaseStartTime={item.phaseStartTime}
                    phaseTimeLimit={item.phaseTimeLimit}
                    serverTimestamp={item.serverTimestamp}
                    text={item.text}
                  />
                )
              case 'delimeter':
                return (
                  <ChatDelimeter
                    day={item.day}
                    key={id}
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
