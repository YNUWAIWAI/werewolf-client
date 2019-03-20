/* global village */
import * as React from 'react'
import {getChannelFromInputChennel, spaceSeparatedToCamelCase} from '../../util'
import ChatIcon from '../atoms/ChatIcon'
import {FormattedMessage} from 'react-intl'
import getCaretCoordinates = require('textarea-caret')

const enum Key {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter'
}

type Props = {
  readonly characterLimit: number
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.public | village.InputChannel.limited
  readonly postCount: number
  readonly postCountLimit: number
} | {
  readonly characterLimit: number
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.grave | village.InputChannel.postMortem | village.InputChannel.private
}

interface State {
  caretPosition: number
  isSuggest: boolean
  sendable: boolean
  suggestLeft: number
  suggestSelected: number
  suggestTop: number
  text: string
  textCount: number
  validTextLength: boolean
}

const data = [
  'A',
  'B'
]
const countText = (text: string): number => Array.of(... text).length
const isValidTextLength = (text: string, upperLimit: number, lowerLimit: number = 1): boolean => {
  const textCount = countText(text)

  return textCount <= upperLimit && textCount >= lowerLimit
}
const isSendable = (postCount: number, postCountLimit: number): boolean => postCount < postCountLimit

export default class CommandInput extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    const text = ''

    this.state = {
      caretPosition: 0,
      isSuggest: false,
      sendable: this.isSendable(),
      suggestLeft: 0,
      suggestSelected: 0,
      suggestTop: 0,
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, props.characterLimit)
    }
  }

  private textareaRef = React.createRef()

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

  public updateIsSuggest(elem: HTMLTextAreaElement) {
    const text = elem.value
    const pos = elem.selectionEnd - 1

    if (text[pos] === '@' && text[pos - 1] !== '@') {
      this.setState({
        isSuggest: true
      })
    } else {
      this.setState({
        isSuggest: false
      })
    }
  }

  public updateText(text: string) {
    this.setState({
      sendable: this.isSendable(),
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, this.props.characterLimit)
    })
  }

  public updateCaretPosition(elem: HTMLTextAreaElement) {
    const {left, top} = getCaretCoordinates(elem, elem.selectionEnd)

    this.setState({
      caretPosition: elem.selectionEnd - 1,
      suggestLeft: left,
      suggestTop: top - elem.scrollTop
    })
  }

  public handleSuggestClick(suggest: string) {
    const text = this.state.text
    const pos = this.state.caretPosition
    const newText = text.slice(0, pos) + suggest + text.slice(pos + 1)

    this.updateText(newText)
    this.setState({
      isSuggest: false,
      suggestSelected: 0
    })
  }

  public handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.updateText(event.target.value)
    this.updateCaretPosition(event.target)
    this.updateIsSuggest(event.target)
  }

  public handlePostChat() {
    if (this.state.sendable && this.state.validTextLength) {
      this.props.handlePostChat(this.state.text)
      this.updateText('')
    }
  }

  public handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.ctrlKey || event.metaKey) && event.key === Key.Enter) {
      this.handlePostChat()
    }
    if (this.state.isSuggest) {
      if (event.key === Key.ArrowLeft || event.key === Key.ArrowRight) {
        this.setState({
          isSuggest: false
        })
      } else if (event.key === Key.ArrowDown) {
        event.preventDefault()
        this.setState(prevState => ({
          suggestSelected: (prevState.suggestSelected + 1) % data.length
        }))
      } else if (event.key === Key.ArrowUp) {
        event.preventDefault()
        this.setState(prevState => ({
          suggestSelected: (prevState.suggestSelected - 1 + data.length) % data.length
        }))
      } else if (event.key === Key.Enter) {
        event.preventDefault()
        this.handleSuggestClick(data[this.state.suggestSelected])
      }
    }
  }

  public render() {
    const SuggestStyle = {
      left: this.state.suggestLeft,
      top: this.state.suggestTop
    }
    const Suggest = () =>
      <div
        className="vi--command--input--suggest--container"
      >
        <div
          className="vi--command--input--suggest--list"
          style={SuggestStyle}
        >
          {
            data.map((item, index) =>
              <div
                className={`vi--command--input--suggest--item ${index === this.state.suggestSelected ? 'selected' : ''}`}
                key={item}
                onClick={() => this.handleSuggestClick(item)}
              >
                {item}
              </div>
            )
          }
        </div>
      </div>

    return (
      <form className="vi--command--input">
        <FormattedMessage id={`CommandInput.placeholder.${spaceSeparatedToCamelCase(this.props.inputChannel)}`}>
          {
            text => {
              if (typeof text !== 'string') {
                return null
              }

              return (
                <textarea
                  className={`vi--command--input--textarea ${spaceSeparatedToCamelCase(this.props.inputChannel)}`}
                  onChange={event => this.handleTextChange(event)}
                  onKeyDown={event => this.handleKeyDown(event)}
                  placeholder={text}
                  value={this.state.text}
                />
              )
            }
          }
        </FormattedMessage>
        {
          this.state.isSuggest ?
            <Suggest /> :
            null
        }
        <span className={`vi--command--input--char ${this.state.validTextLength ? '' : 'error'}`}>
          {this.state.textCount}
        </span>
        <ChatIcon
          channel={getChannelFromInputChennel({
            inputChannel: this.props.inputChannel,
            role: village.RoleId.werewolf
          })}
          className="vi--command--input--icon"
        />
        {
          this.props.inputChannel === 'public' || this.props.inputChannel === 'limited' ?
            <span className="vi--command--input--counter">
              {`${this.props.postCount}/${this.props.postCountLimit}`}
            </span> :
            null
        }
        <FormattedMessage id="CommandInput.send">
          {
            text =>
              <button className="vi--command--input--send" disabled={!(this.state.sendable && this.state.validTextLength)} onClick={() => this.handlePostChat()}>
                {text}
              </button>
          }
        </FormattedMessage>
      </form>
    )
  }
}
