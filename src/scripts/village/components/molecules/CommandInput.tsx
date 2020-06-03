import * as React from 'react'
import {
  getChannelFromInputChennel,
  getText,
  spaceSeparatedToCamelCase
} from '../../util'
import {
  useFuse,
  useSelector,
  useTextInput
} from '../../hooks'
import {ChatIcon} from '../atoms/ChatIcon'
import {CommandInputPostCounter} from '../atoms/CommandInputPostCounter'
import {CommandInputSuggest} from '../atoms/CommandInputSuggest'
import {CommandInputTextCounter} from '../atoms/CommandInputTextCounter'
import {FormattedMessage} from 'react-intl'
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
export const enum Key {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Enter = 'Enter',
  Tab = 'Tab'
}

export const CommandInput: React.FC<Props> = props => {
  const availableToSend = () => {
    if (
      props.inputChannel === village.InputChannel.public ||
      props.inputChannel === village.InputChannel.werewolf
    ) {
      return props.numberOfChatMessages < props.maxNumberOfChatMessages
    }

    return true
  }
  const selector = useSelector(0)
  const {suggestedResult, updateSearchText} = useFuse(props.suggestedData)
  const textInput = useTextInput({
    availableToSend: availableToSend(),
    maxLengthOfUnicodeCodePoints: props.maxLengthOfUnicodeCodePoints,
    text: ''
  })
  const [suggestPosition, setSuggestPosition] = React.useState({
    left: 0,
    top: 0
  })
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    const elem = textareaRef.current

    if (elem === null) {
      return
    }
    elem.focus()
    elem.setSelectionRange(textInput.caretPosition, textInput.caretPosition)
  }, [textInput.caretPosition])

  React.useEffect(() => {
    if (!textInput.suggestable) {
      return
    }

    updateSearchText(textInput.searchText)
  }, [textInput.searchText, textInput.suggestable, updateSearchText])

  React.useEffect(() => {
    const elem = textareaRef.current

    if (elem === null || !textInput.suggestable) {
      return
    }
    const {left, top} = getCaretCoordinates(elem, textInput.trigerPosition + 1)

    setSuggestPosition({
      left,
      top: top - elem.scrollTop
    })
  }, [textInput.suggestable, textInput.trigerPosition, textInput.text])

  React.useEffect(() => {
    selector.setLength(suggestedResult.length)
  }, [selector, suggestedResult])

  const handlePostChat = () => {
    if (!textInput.disabled) {
      props.handlePostChat(textInput.text)
      textInput.reset()
    }
  }
  const handleSuggestClick = (suggest: string) => {
    textInput.replaceText(suggest)
    selector.refresh()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (textInput.compositing) {
      return
    }
    if (!textInput.suggestable || suggestedResult.length <= 0) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === Key.Enter
      ) {
        handlePostChat()
      }

      return
    }
    switch (event.key) {
      case Key.ArrowLeft:
      case Key.ArrowRight:
        selector.refresh()
        textInput.hideSuggest()

        return
      case Key.ArrowDown:
        event.preventDefault()
        selector.next()

        return
      case Key.ArrowUp:
        event.preventDefault()
        selector.prev()

        return
      case Key.Enter:
      case Key.Tab:
        event.preventDefault()
        handleSuggestClick(
          getText(
            {
              language: props.language,
              languageMap: suggestedResult[selector.selectedItem].name
            }
          )
        )

        return
      default:
        textInput.showSuggest()
    }
  }
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    const newCaretPosition = event.target.selectionEnd

    textInput.changeText({
      newCaretPosition,
      newText
    })
    selector.refresh()
  }
  const handleComposition = (event: React.CompositionEvent<HTMLTextAreaElement>) => {
    if (event.type === 'compositionstart') {
      textInput.setCompositing(true)
    } else if (event.type === 'compositionend') {
      textInput.setCompositing(false)
    }
  }

  const inputChannel = spaceSeparatedToCamelCase(props.inputChannel)
  const channel = getChannelFromInputChennel({
    inputChannel: props.inputChannel,
    role: village.RoleId.werewolf
  })
  const tabIndex = props.navigatable ? 0 : -1

  return (
    <div className="vi--command--input">
      <FormattedMessage id={`CommandInput.placeholder.${inputChannel}`}>
        {
          placeholder => (
            <textarea
              className={`vi--command--input--textarea ${inputChannel}`}
              onChange={handleTextChange}
              onCompositionEnd={handleComposition}
              onCompositionStart={handleComposition}
              onCompositionUpdate={handleComposition}
              onKeyDown={handleKeyDown}
              placeholder={typeof placeholder === 'string' ? placeholder : undefined}
              ref={textareaRef}
              tabIndex={tabIndex}
              value={textInput.text}
            />
          )
        }
      </FormattedMessage>
      <CommandInputSuggest
        data={suggestedResult}
        handleSuggestClick={handleSuggestClick}
        language={props.language}
        left={suggestPosition.left}
        selected={selector.selectedItem}
        suggestable={textInput.suggestable}
        top={suggestPosition.top}
      />
      <CommandInputTextCounter
        textCount={textInput.count}
        valid={textInput.valid}
      />
      <ChatIcon
        channel={channel}
        className="vi--command--input--icon"
      />
      <CommandInputPostCounter
        inputChannel={props.inputChannel}
        maxNumberOfChatMessages={props.maxNumberOfChatMessages}
        numberOfChatMessages={props.numberOfChatMessages}
      />
      <button
        className="vi--command--input--send"
        disabled={textInput.disabled}
        onClick={handlePostChat}
        tabIndex={tabIndex}
      >
        <FormattedMessage
          id="CommandInput.send"
        />
      </button>
    </div>
  )
}
CommandInput.displayName = 'CommandInput'
