/* global village */
import * as React from 'react'
import {getChannelFromInputChennel, spaceSeparatedToCamelCase} from '../../util'
import ChatIcon from '../atoms/ChatIcon'
import {FormattedMessage} from 'react-intl'

const countText = (text: string): number => Array.of(... text).length
const isValidTextLength = (text: string, upperLimit: number, lowerLimit: number = 1): boolean => {
  const textCount = countText(text)

  return textCount <= upperLimit && textCount >= lowerLimit
}
const isSendable = (postCount: number, postCountLimit: number): boolean => postCount < postCountLimit

type Props = {
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.public | village.InputChannel.limited
  readonly postCount: number
  readonly postCountLimit: number
} | {
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.grave | village.InputChannel.postMortem | village.InputChannel.private
}

interface State {
  sendable: boolean
  text: string
  textCount: number
  validTextLength: boolean
}

export default class CommandInput extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    const text = ''

    this.state = {
      sendable: this.isSendable(),
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, 140)
    }
  }

  public isSendable() {
    switch (this.props.inputChannel) {
      case village.InputChannel.grave:
      case village.InputChannel.private:
      case village.InputChannel.postMortem:
        return true
      case village.InputChannel.public:
      case village.InputChannel.limited:
        return isSendable(this.props.postCount, this.props.postCountLimit)
      default:
        throw Error('props.inputChannel: unkonwn')
    }
  }

  public updateText(text: string) {
    this.setState({
      sendable: this.isSendable(),
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, 140)
    })
  }

  public handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.updateText(event.target.value)
  }

  public handlePostChat() {
    if (this.state.sendable && this.state.validTextLength) {
      this.props.handlePostChat(this.state.text)
      this.updateText('')
    }
  }

  public handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.handlePostChat()
    }
  }

  public render() {
    return (
      <form className={`command--input ${spaceSeparatedToCamelCase(this.props.inputChannel)}`}>
        <FormattedMessage id={`CommandInput.placeholder.${spaceSeparatedToCamelCase(this.props.inputChannel)}`}>
          {
            text => {
              if (typeof text !== 'string') {
                return null
              }

              return (
                <textarea
                  onChange={event => this.handleTextChange(event)}
                  onKeyDown={event => this.handleKeyDown(event)}
                  placeholder={text}
                  value={this.state.text}
                />
              )
            }
          }
        </FormattedMessage>
        <span className={`command--input--char ${this.state.validTextLength ? '' : 'error'}`}>
          {this.state.textCount}
        </span>
        <ChatIcon
          channel={getChannelFromInputChennel({
            inputChannel: this.props.inputChannel,
            role: village.RoleId.werewolf
          })}
          className="command--input--icon"
        />
        {
          this.props.inputChannel === 'public' || this.props.inputChannel === 'limited' ?
            <span className="command--input--counter">
              {`${this.props.postCount}/${this.props.postCountLimit}`}
            </span> :
            ''
        }
        <FormattedMessage id="CommandInput.send">
          {
            text =>
              <button className="command--input--send" disabled={!(this.state.sendable && this.state.validTextLength)} onClick={() => this.handlePostChat()}>
                {text}
              </button>
          }
        </FormattedMessage>
      </form>
    )
  }
}
