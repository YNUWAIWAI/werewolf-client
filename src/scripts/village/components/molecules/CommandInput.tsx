import * as React from 'react'
import {
  countText,
  getChannelFromInputChennel,
  getText,
  isValidTextLength,
  spaceSeparatedToCamelCase
} from '../../util'
import ChatIcon from '../atoms/ChatIcon'
import CommandInputPostCounter from '../atoms/CommandInputPostCounter'
import CommandInputSuggest from '../atoms/CommandInputSuggest'
import CommandInputTextCounter from '../atoms/CommandInputTextCounter'
import {FormattedMessage} from 'react-intl'
import Fuse from 'fuse.js'
import {SuggestedData} from '../../reducers/suggest'
import getCaretCoordinates = require('textarea-caret')
import {village} from '../../types'

interface Props {
  readonly handlePostChat: (value: string) => void
  readonly inputChannel: village.InputChannel
  readonly language: village.Language
  readonly maxLengthOfUnicodeCodePoints: number
  readonly maxNumberOfChatMessages: number
  readonly navigatable: boolean
  readonly numberOfChatMessages: number
  readonly suggestedData: SuggestedData[]
}
interface State {
  caretPosition: number
  processing: boolean
  suggestLeft: number
  suggestSelected: number
  suggestedData: SuggestedData[]
  suggestTop: number
  suggestable: boolean
  text: string
  trigerPosition: number
}
export const enum Key {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter',
  Tab = 'Tab'
}
export const enum Triger {
  At = '@',
  Space = ' '
}
const options: Fuse.IFuseOptions<SuggestedData> = {
  distance: 100,
  keys: [
    'id',
    'name.en',
    'name.fr',
    'name.it',
    'name.ja'
  ],
  location: 0,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.6
}

export default class CommandInput extends React.Component<Props, State> {
  private fuse: Fuse<SuggestedData, Fuse.IFuseOptions<SuggestedData>>

  public constructor(props: Props) {
    super(props)
    const text = ''

    this.state = {
      caretPosition: 0,
      processing: false,
      suggestLeft: 0,
      suggestSelected: 0,
      suggestTop: 0,
      suggestable: false,
      suggestedData: props.suggestedData,
      text,
      trigerPosition: 0
    }
    this.fuse = new Fuse(props.suggestedData, options)
    this.handleSuggestClick = this.handleSuggestClick.bind(this)
  }

  public shouldComponentUpdate() {
    return true
  }

  private textareaRef = React.createRef<HTMLTextAreaElement>()

  public getSearchText(text: string, caretPosition: number) {
    return text.slice(this.state.trigerPosition + 1, caretPosition)
  }

  public handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (this.state.processing) {
      return
    }
    if (!this.state.suggestable || this.state.suggestedData.length <= 0) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === Key.Enter
      ) {
        this.handlePostChat()
      }

      return
    }
    switch (event.key) {
      case Key.ArrowLeft:
      case Key.ArrowRight:
        this.updateSuggestable(false)

        return
      case Key.ArrowDown:
        event.preventDefault()
        this.setState(prevState => {
          const suggestSelected = (prevState.suggestSelected + 1) % prevState.suggestedData.length

          return {
            suggestSelected
          }
        })

        return
      case Key.ArrowUp:
        event.preventDefault()
        this.setState(prevState => {
          const suggestSelected = (prevState.suggestSelected - 1 + prevState.suggestedData.length) % prevState.suggestedData.length

          return {
            suggestSelected
          }
        })

        return
      case Key.Enter:
      case Key.Tab:
        event.preventDefault()
        this.handleSuggestClick(
          getText(
            {
              language: this.props.language,
              languageMap: this.state.suggestedData[this.state.suggestSelected].name
            }
          )
        )

        return
      default:
        return
    }
  }

  public handlePostChat() {
    if (this.isSendable() && this.isValidTextLength()) {
      this.props.handlePostChat(this.state.text)
      this.updateText('')
    }
  }

  public handleSuggestClick(suggest: string) {
    const text = this.state.text
    const newText = text.slice(0, this.state.trigerPosition) + suggest + text.slice(this.state.caretPosition)

    this.updateText(newText)
    this.updateCaretPosition(this.state.trigerPosition + countText(suggest))
    this.updateSuggestable(false)
  }

  public handleTextChange({caretPosition, text}: {caretPosition: number, text: string}) {
    this.updateText(text)
    this.updateCaretPosition(caretPosition)
    const pos = caretPosition - 1

    if (text[pos] === Triger.At) {
      if (text[pos - 1] === Triger.At) {
        this.updateSuggestable(false)
      } else {
        this.updateTrigerPosition(caretPosition - 1)
        this.updateSuggestable(true)
      }
    } else if (text[pos] === Triger.Space) {
      this.updateSuggestable(false)
    } else if (caretPosition <= this.state.trigerPosition) {
      this.updateSuggestable(false)
    } else if (this.state.suggestable) {
      const suggestedData =
        this.fuse.search<SuggestedData>(this.getSearchText(text, caretPosition))
          .map(result => result.item)

      this.setState({
        suggestSelected: 0,
        suggestedData
      })
      this.updateTrigerPosition(this.state.trigerPosition)
    }
  }

  public isSendable() {
    switch (this.props.inputChannel) {
      case village.InputChannel.grave:
      case village.InputChannel.private:
      case village.InputChannel.postMortem:
        return true
      case village.InputChannel.public:
      case village.InputChannel.werewolf:
        return this.props.numberOfChatMessages < this.props.maxNumberOfChatMessages
      default:
        throw Error('props.inputChannel: unkonwn')
    }
  }

  public isValidTextLength() {
    return isValidTextLength(this.state.text, this.props.maxLengthOfUnicodeCodePoints, 1)
  }

  public updateCaretPosition(caretPosition: number) {
    this.setState({
      caretPosition
    }, () => {
      const elem = this.textareaRef.current

      if (elem === null) {
        return
      }
      elem.focus()
      elem.setSelectionRange(this.state.caretPosition, this.state.caretPosition)
    })
  }

  public updateProcessing(processing: boolean) {
    this.setState({
      processing
    })
  }

  public updateSuggestable(suggestable: boolean) {
    this.setState({
      suggestSelected: 0,
      suggestable,
      suggestedData: this.props.suggestedData
    })
  }

  public updateText(text: string) {
    this.setState({
      text
    })
  }

  public updateTrigerPosition(position: number) {
    const elem = this.textareaRef.current

    if (elem === null) {
      return
    }
    const {left, top} = getCaretCoordinates(elem, position + 1)

    this.setState({
      suggestLeft: left,
      suggestTop: top - elem.scrollTop,
      trigerPosition: position
    })
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
                  onChange={event => this.handleTextChange({
                    caretPosition: event.target.selectionEnd,
                    text: event.target.value
                  })}
                  onCompositionEnd={() => this.updateProcessing(false)}
                  onCompositionStart={() => this.updateProcessing(true)}
                  onKeyDown={event => this.handleKeyDown(event)}
                  placeholder={text}
                  ref={this.textareaRef}
                  tabIndex={this.props.navigatable ? 0 : -1}
                  value={this.state.text}
                />
              )
            }
          }
        </FormattedMessage>
        <CommandInputSuggest
          data={this.state.suggestedData}
          handleSuggestClick={this.handleSuggestClick}
          language={this.props.language}
          left={this.state.suggestLeft}
          selected={this.state.suggestSelected}
          suggestable={this.state.suggestable}
          top={this.state.suggestTop}
        />
        <CommandInputTextCounter
          textCount={countText(this.state.text)}
          valid={this.isValidTextLength()}
        />
        <ChatIcon
          channel={getChannelFromInputChennel({
            inputChannel: this.props.inputChannel,
            role: village.RoleId.werewolf
          })}
          className="vi--command--input--icon"
        />
        <CommandInputPostCounter
          inputChannel={this.props.inputChannel}
          maxNumberOfChatMessages={this.props.maxNumberOfChatMessages}
          numberOfChatMessages={this.props.numberOfChatMessages}
        />
        <FormattedMessage id="CommandInput.send">
          {
            text => (
              <button
                className="vi--command--input--send"
                disabled={!(this.isSendable() && this.isValidTextLength())}
                onClick={() => this.handlePostChat()}
                tabIndex={this.props.navigatable ? 0 : -1}
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
      </div>
    )
  }
}
