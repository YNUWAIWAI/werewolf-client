// @flow
import {FormattedMessage, injectIntl} from 'react-intl'
import ChatIcon from './ChatIcon'
import React from 'react'
import {getChannelFromInputChennel} from '../constants/Channels'
import {spaceSeparatedToCamelCase} from '../util'

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
  +kind: 'private' | 'post mortem'
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
    switch (this.props.kind) {
      case 'private':
      case 'post mortem':
        return true
      case 'public':
      case 'limited':
        return isSendable(this.props.postCount, this.props.postCountLimit)
      default:
        throw Error(`Unknown: ${this.props.kind}`)
    }
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
    const Textarea = injectIntl(({intl}) =>
      <textarea
        onChange={(event: SyntheticInputEvent<HTMLTextAreaElement>) => this.handleTextChange(event)}
        onKeyDown={(event: SyntheticKeyboardEvent<HTMLTextAreaElement>) => this.handleKeyDown(event)}
        placeholder={intl.formatMessage({
          id: `CommandInput.placeholder.${spaceSeparatedToCamelCase(this.props.kind)}`
        })}
        value={this.state.text}
      />
    )

    return (
      <form className={`command--input ${spaceSeparatedToCamelCase(this.props.kind)}`}>
        <Textarea />
        <span className={`command--input--char ${this.state.validTextLength ? '' : 'error'}`}>
          {this.state.textCount}
        </span>
        <ChatIcon
          channel={getChannelFromInputChennel(this.props.kind, 'werewolf')}
          className="command--input--icon"
        />
        {
          this.props.kind === 'public' || this.props.kind === 'limited' ?
            <span className="command--input--counter">
              {`${this.props.postCount}/${this.props.postCountLimit}`}
            </span> :
            ''
        }
        <FormattedMessage id="CommandInput.send">
          {
            (text: string) =>
              <button className="command--input--send" disabled={!(this.state.sendable && this.state.validTextLength)} onClick={() => this.handlePostChat()}>
                {text}
              </button>
          }
        </FormattedMessage>
      </form>
    )
  }
}
