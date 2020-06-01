import * as React from 'react'
import {
  countText,
  getChannelFromInputChennel,
  getText,
  isValidTextLength,
  spaceSeparatedToCamelCase
} from '../../util'
import {ChatIcon} from '../atoms/ChatIcon'
import {CommandInputPostCounter} from '../atoms/CommandInputPostCounter'
import {CommandInputSuggest} from '../atoms/CommandInputSuggest'
import {CommandInputTextCounter} from '../atoms/CommandInputTextCounter'
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

export const CommandInput: React.FC<Props> = props => {
  const fuse = new Fuse(props.suggestedData, options)
  const [caretPosition, setCaretPosition] = React.useState(0)
  const [compositing, setCompositing] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState(0)
  const [suggestPosition, setSuggestPosition] = React.useState({
    left: 0,
    top: 0
  })
  const [suggestable, setSuggestable] = React.useState(false)
  const [text, setText] = React.useState('')
  const [trigerPosition, setTrigerPosition] = React.useState(0)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    const elem = textareaRef.current

    if (elem === null) {
      return
    }
    elem.focus()
    elem.setSelectionRange(caretPosition, caretPosition)
  }, [caretPosition])

  const suggestedResult = React.useMemo(() => {
    const searchText = text.slice(
      trigerPosition + 1,
      caretPosition
    )

    if (searchText === '') {
      return props.suggestedData
    }

    return fuse.search<SuggestedData>(searchText)
      .map(result => result.item)
  }, [fuse, text, caretPosition, trigerPosition, props.suggestedData])

  const updateSuggestPosition = () => {
    const elem = textareaRef.current

    if (elem === null) {
      return
    }
    const {left, top} = getCaretCoordinates(elem, trigerPosition + 1)

    setSuggestPosition({
      left,
      top: top - elem.scrollTop
    })
  }

  const isSendable = () => {
    switch (props.inputChannel) {
      case village.InputChannel.grave:
      case village.InputChannel.private:
      case village.InputChannel.postMortem:
        return true
      case village.InputChannel.public:
      case village.InputChannel.werewolf:
        return props.numberOfChatMessages < props.maxNumberOfChatMessages
      default:
        throw Error('props.inputChannel: unkonwn')
    }
  }
  const isValid = () => isValidTextLength(text, props.maxLengthOfUnicodeCodePoints, 1)
  const handlePostChat = () => {
    if (isSendable() && isValid()) {
      props.handlePostChat(text)
      setText('')
    }
  }
  const handleSuggestClick = (suggest: string) => {
    const newText = text.slice(0, trigerPosition) + suggest + text.slice(caretPosition)

    setText(newText)
    setCaretPosition(trigerPosition + countText(suggest))
    setSelectedItem(0)
    setSuggestable(false)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (compositing) {
      return
    }
    if (!suggestable || suggestedResult.length <= 0) {
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
        setSelectedItem(0)
        setSuggestable(false)

        return
      case Key.ArrowDown:
        event.preventDefault()
        setSelectedItem((selectedItem + 1) % suggestedResult.length)

        return
      case Key.ArrowUp:
        event.preventDefault()
        setSelectedItem((selectedItem - 1 + suggestedResult.length) % suggestedResult.length)

        return
      case Key.Enter:
      case Key.Tab:
        event.preventDefault()
        handleSuggestClick(
          getText(
            {
              language: props.language,
              languageMap: suggestedResult[selectedItem].name
            }
          )
        )

        // eslint-disable-next-line no-useless-return
        return
      default:
        // eslint-disable-next-line no-useless-return
        return
    }
  }
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    const newCaretPosition = event.target.selectionEnd

    setText(newText)
    setCaretPosition(newCaretPosition)

    const pos = newCaretPosition - 1

    if (newText[pos] === Triger.At) {
      if (newText[pos - 1] === Triger.At) {
        setSelectedItem(0)
        setSuggestable(false)
      } else {
        setSelectedItem(0)
        setSuggestable(true)
        setTrigerPosition(pos)
        updateSuggestPosition()
      }
    } else if (newText[pos] === Triger.Space) {
      setSelectedItem(0)
      setSuggestable(false)
    } else if (newCaretPosition <= trigerPosition) {
      setSelectedItem(0)
      setSuggestable(false)
    } else if (suggestable) {
      setSelectedItem(0)
      setSuggestable(true)
      setTrigerPosition(trigerPosition)
      updateSuggestPosition()
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
              onCompositionEnd={() => setCompositing(false)}
              onCompositionStart={() => setCompositing(true)}
              onKeyDown={handleKeyDown}
              placeholder={typeof placeholder === 'string' ? placeholder : undefined}
              ref={textareaRef}
              tabIndex={tabIndex}
              value={text}
            />
          )
        }
      </FormattedMessage>
      <CommandInputSuggest
        data={suggestedResult}
        handleSuggestClick={handleSuggestClick}
        language={props.language}
        left={suggestPosition.left}
        selected={selectedItem}
        suggestable={suggestable}
        top={suggestPosition.top}
      />
      <CommandInputTextCounter
        textCount={countText(text)}
        valid={isValid()}
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
        disabled={!(isSendable() && isValid())}
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
