// @flow
import React from 'react'

const countText = (text: string): number => Array.of(... text).length

type Props = {
  +handlePostChat: string => void,
  +isSendable: boolean,
  +kind: InputChannel,
  +postCount: number,
  +postCountLimit: number,
  +setIsSendable: boolean => void,
}
type State = {
  isOver: boolean,
  text: string,
  textCount: number
}

class CommandInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOver: false,
      text: '',
      textCount: 0
    }
  }

  handleTextChange(event: SyntheticInputEvent<HTMLTextAreaElement>) {
    const text = event.target.value
    const textCount = countText(text)
    let isOver, isSendable

    if (textCount > 140) {
      isOver = true
      isSendable = false
    } else {
      isOver = false
      if (this.props.postCount >= this.props.postCountLimit) {
        isSendable = false
      }
      isSendable = true
    }
    this.setState({
      isOver,
      text,
      textCount
    })
    if (this.props.isSendable !== isSendable) {
      this.props.setIsSendable(isSendable)
    }
  }

  handlePostChat() {
    this.props.setIsSendable(false)
    this.props.handlePostChat(this.state.text)
    this.setState({
      isOver: false,
      text: '',
      textCount: 0
    })
  }

  handleKeyDown(event: SyntheticKeyboardEvent<HTMLTextAreaElement>) {
    if (!this.props.isSendable) {
      return
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.props.setIsSendable(false)
      this.props.handlePostChat(this.state.text)
      this.setState({
        isOver: false,
        text: '',
        textCount: 0
      })
    }
  }

  render() {
    const placeholder = (() => ({
      limited: '人狼用',
      private: '非公開用',
      public: '公開用'
    })[this.props.kind])()

    return (
      <form className={`command--input ${this.props.kind}`}>
        <textarea
          onChange={e => this.handleTextChange(e)}
          onKeyDown={e => this.handleKeyDown(e)}
          placeholder={placeholder}
          value={this.state.text}
        />
        <span className={`command--input--char ${this.state.isOver ? 'error' : ''}`}>
          {this.state.textCount}
        </span>
        {
          this.props.kind === 'private' ||
          <span className="command--input--counter">
            {`${this.props.postCount}/${this.props.postCountLimit}`}
          </span>
        }
        <button disabled={!this.props.isSendable} onClick={() => this.handlePostChat()}>
          {'送信'}
        </button>
      </form>
    )
  }
}

export default CommandInput
