// @flow
import React from 'react'

const countText = (text: string): number => Array.of(... text).length

const isValidTextLength = (text: string, upperLimit: number, lowerLimit?: number = 1): boolean => {
  const textCount = countText(text)

  return textCount <= upperLimit && textCount >= lowerLimit
}

const isSendable = (postCount: number, postCountLimit: number): boolean => postCount < postCountLimit

type Props = {
  +handlePostChat: string => void,
  +kind: 'public' | 'limited',
  +postCount: number,
  +postCountLimit: number
} | {
  +handlePostChat: string => void,
  +kind: 'private'
}
type State = {
  sendable: boolean,
  text: string,
  textCount: number,
  validTextLength: boolean
}

export default class CommandInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const text = ''

    this.state = {
      sendable: this.isSendable(),
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, 140)
    }
  }

  isSendable() {
    if (this.props.kind === 'private') {
      return true
    }

    return isSendable(this.props.postCount, this.props.postCountLimit)
  }

  updateText(text: string) {
    this.setState({
      sendable: this.isSendable(),
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, 140)
    })
  }

  handleTextChange(event: SyntheticInputEvent<HTMLTextAreaElement>) {
    this.updateText(event.target.value)
  }

  handlePostChat() {
    if (this.state.sendable && this.state.validTextLength) {
      this.props.handlePostChat(this.state.text)
      this.updateText('')
    }
  }

  handleKeyDown(event: SyntheticKeyboardEvent<HTMLTextAreaElement>) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.handlePostChat()
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
        <span className={`command--input--char ${this.state.validTextLength ? '' : 'error'}`}>
          {this.state.textCount}
        </span>
        {
          this.props.kind === 'private' ?
            '' :
            <span className="command--input--counter">
              {`${this.props.postCount}/${this.props.postCountLimit}`}
            </span>
        }
        <button disabled={!(this.state.sendable && this.state.validTextLength)} onClick={() => this.handlePostChat()}>
          {'送信'}
        </button>
      </form>
    )
  }
}
