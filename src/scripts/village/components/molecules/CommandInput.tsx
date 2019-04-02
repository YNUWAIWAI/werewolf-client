/* global village */
import * as Fuse from 'fuse.js'
import * as React from 'react'
import {getChannelFromInputChennel, getText, spaceSeparatedToCamelCase} from '../../util'
import ChatIcon from '../atoms/ChatIcon'
import CommandInputSuggest from './CommandInputSuggest'
import {FormattedMessage} from 'react-intl'
import {State as SuggestState} from '../../reducers/suggest'
import getCaretCoordinates = require('textarea-caret')

const enum Key {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter',
  Tab = 'Tab'
}

type Props = {
  readonly characterLimit: number
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.public | village.InputChannel.limited
  readonly language: village.Language
  readonly postCount: number
  readonly postCountLimit: number
  readonly suggesttedData: SuggestState['data']
} | {
  readonly characterLimit: number
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel.grave | village.InputChannel.postMortem | village.InputChannel.private
  readonly language: village.Language
  readonly suggesttedData: SuggestState['data']
}

interface State {
  atPosition: number
  caretPosition: number
  isProcessing: boolean
  isSuggest: boolean
  sendable: boolean
  suggestLeft: number
  suggestSelected: number
  suggesttedData: SuggestState['data']
  suggestTop: number
  text: string
  textCount: number
  validTextLength: boolean
}

const options = {
  distance: 100,
  keys: [
    'id',
    'name.en',
    'name.fr',
    'name.it',
    'name.ja'
  ],
  location: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.6
}
const countText = (text: string): number => Array.of(... text).length
const isValidTextLength = (text: string, upperLimit: number, lowerLimit: number = 1): boolean => {
  const textCount = countText(text)

  return textCount <= upperLimit && textCount >= lowerLimit
}
const isSendable = (postCount: number, postCountLimit: number): boolean => postCount < postCountLimit

export default class CommandInput extends React.Component<Props, State> {
  private fuse: Fuse<SuggestState['data'][number]>

  public constructor(props: Props) {
    super(props)
    const text = ''

    this.state = {
      atPosition: 0,
      caretPosition: 0,
      isProcessing: false,
      isSuggest: false,
      sendable: this.isSendable(),
      suggestLeft: 0,
      suggestSelected: 0,
      suggestTop: 0,
      suggesttedData: props.suggesttedData,
      text,
      textCount: countText(text),
      validTextLength: isValidTextLength(text, props.characterLimit)
    }
    this.fuse = new Fuse(props.suggesttedData, options)
  }

  private textareaRef = React.createRef<HTMLTextAreaElement>()

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

  public updateAtPosition(elem: HTMLTextAreaElement) {
    const {left, top} = getCaretCoordinates(elem, elem.selectionEnd)

    this.setState({
      atPosition: elem.selectionEnd - 1,
      suggestLeft: left,
      suggestTop: top - elem.scrollTop
    })
  }

  public updateCaretPosition(caretPosition: number) {
    this.setState({
      caretPosition
    }, () => {
      if (this.textareaRef.current === null) {
        return
      }
      this.textareaRef.current.focus()
      this.textareaRef.current.setSelectionRange(this.state.caretPosition, this.state.caretPosition)
    })
  }

  public updateIsSuggest(isSuggest: boolean) {
    if (isSuggest) {
      this.setState({
        isSuggest: true
      })
    } else {
      this.setState({
        isSuggest: false,
        suggestSelected: 0,
        suggesttedData: this.props.suggesttedData
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

  public handleBlur() {
    this.updateIsSuggest(false)
  }

  public handleComposition(isProcessing: boolean) {
    this.setState({
      isProcessing
    })
  }

  public handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (this.state.isProcessing) {
      return
    }
    if ((event.ctrlKey || event.metaKey) && event.key === Key.Enter) {
      this.handlePostChat()
    }
    if (this.state.isSuggest) {
      if (event.key === Key.ArrowLeft || event.key === Key.ArrowRight) {
        this.updateIsSuggest(false)
      } else if (event.key === Key.ArrowDown && this.state.suggesttedData.length > 0) {
        event.preventDefault()
        this.setState(prevState => {
          const suggestSelected = (prevState.suggestSelected + 1) % prevState.suggesttedData.length

          return {
            suggestSelected
          }
        })
      } else if (event.key === Key.ArrowUp && this.state.suggesttedData.length > 0) {
        event.preventDefault()
        this.setState(prevState => {
          const suggestSelected = (prevState.suggestSelected - 1 + prevState.suggesttedData.length) % prevState.suggesttedData.length

          return {
            suggestSelected
          }
        })
      } else if (event.key === Key.Enter || event.key === Key.Tab) {
        event.preventDefault()
        if (this.state.suggesttedData.length <= 0) {
          return
        }
        this.handleSuggestClick(
          getText(
            {
              language: this.props.language,
              languageMap: this.state.suggesttedData[this.state.suggestSelected].name
            }
          )
        )
      }
    }
  }

  public handlePostChat() {
    if (this.state.sendable && this.state.validTextLength) {
      this.props.handlePostChat(this.state.text)
      this.updateText('')
    }
  }

  public handleSuggestClick(suggest: string) {
    const text = this.state.text
    const newText = text.slice(0, this.state.atPosition) + suggest + text.slice(this.state.caretPosition)

    this.updateText(newText)
    this.updateCaretPosition(this.state.atPosition + countText(suggest))
    this.updateIsSuggest(false)
  }

  public handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.updateText(event.target.value)
    this.updateCaretPosition(event.target.selectionEnd)
    const pos = event.target.selectionEnd - 1
    const text = event.target.value

    if (text[pos] === '@') {
      if (text[pos - 1] === '@') {
        this.updateIsSuggest(false)
      } else {
        this.updateAtPosition(event.target)
        this.updateIsSuggest(true)
      }
    } else if (text[pos] === ' ') {
      this.updateIsSuggest(false)
    } else if (event.target.selectionEnd <= this.state.atPosition) {
      this.updateIsSuggest(false)
    } else if (this.state.isSuggest) {
      const atText = text.slice(this.state.atPosition + 1, event.target.selectionEnd)
      const suggesttedData = this.fuse.search(atText)

      this.setState({
        suggesttedData
      })
    }
  }

  public render() {
    return (
      <div className="vi--command--input">
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
                  onCompositionEnd={() => this.handleComposition(false)}
                  onCompositionStart={() => this.handleComposition(true)}
                  onKeyDown={event => this.handleKeyDown(event)}
                  placeholder={text}
                  ref={this.textareaRef}
                  value={this.state.text}
                />
              )
            }
          }
        </FormattedMessage>
        {
          this.state.isSuggest ?
            <CommandInputSuggest
              data={this.state.suggesttedData}
              handleSuggestClick={this.handleSuggestClick.bind(this)}
              language={this.props.language}
              left={this.state.suggestLeft}
              selected={this.state.suggestSelected}
              top={this.state.suggestTop}
            /> :
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
              <button
                className="vi--command--input--send"
                disabled={!(this.state.sendable && this.state.validTextLength)}
                onClick={() => this.handlePostChat()}
              >
                {text}
              </button>
          }
        </FormattedMessage>
      </div>
    )
  }
}
