import * as React from 'react'
import {
  countText,
  isValidTextLength
} from '../util'

interface InitialValue {
  readonly availableToSend: boolean
  readonly maxLengthOfUnicodeCodePoints: number
  readonly text: string
}

const enum Triger {
  At = '@',
  Space = ' '
}
const enum Token {
  empty = 'empty',
  letter = 'letter',
  space = 'space',
  triger = 'triger'
}
const parse = (char: string) => {
  if (typeof char !== 'string') {
    return Token.empty
  } else if (char === Triger.At) {
    return Token.triger
  } else if (char === Triger.Space) {
    return Token.space
  }

  return Token.letter
}

export const useTextInput = (initialValue: InitialValue) => {
  const [caretPosition, setCaretPosition] = React.useState(0)
  const [compositing, setCompositing] = React.useState(false)
  const [suggestable, setSuggestable] = React.useState(false)
  const [text, setText] = React.useState(initialValue.text)
  const [trigerPosition, setTrigerPosition] = React.useState(0)
  const count = countText(text)
  const valid = isValidTextLength(text, initialValue.maxLengthOfUnicodeCodePoints, 1)
  const disabled = !valid || !initialValue.availableToSend
  const searchText = React.useMemo(() => {
    if (!suggestable) {
      return ''
    }

    return text.slice(
      trigerPosition + 1,
      caretPosition
    )
  }, [caretPosition, suggestable, text, trigerPosition])

  const hideSuggest = () => {
    setSuggestable(false)
  }
  const showSuggest = () => {
    setSuggestable(true)
  }
  const changeText = ({newText, newCaretPosition}: {
    newCaretPosition: number
    newText: string
  }) => {
    setText(newText)
    setCaretPosition(newCaretPosition)
    const pos = newCaretPosition - 1
    const current = parse(newText[pos])
    const prev = parse(newText[pos - 1])

    if (prev === Token.empty && current === Token.empty) {
      setSuggestable(false)
    }
    if (prev === Token.empty && current === Token.triger) {
      setSuggestable(true)
      setTrigerPosition(pos)
    }
    if (prev === Token.empty && current === Token.letter) {
      setSuggestable(false)
    }
    if (prev === Token.empty && current === Token.space) {
      setSuggestable(false)
    }
    if (prev === Token.empty && current === Token.letter) {
      setSuggestable(false)
    }
    if (prev === Token.letter && current === Token.letter) { // 'aa'
      const re = /@[^\s@]*$/
      const t = newText.slice(0, pos)

      if (re.test(t)) {
        setSuggestable(true)
        setTrigerPosition(t.search(re))
      }
    }
    if (prev === Token.letter && current === Token.triger) { // 'a@'
      setSuggestable(true)
      setTrigerPosition(pos)
    }
    if (prev === Token.letter && current === Token.space) { // 'a '
      setSuggestable(false)
    }
    if (prev === Token.space && current === Token.letter) { // ' a'
      setSuggestable(false)
    }
    if (prev === Token.space && current === Token.triger) { // ' @'
      setSuggestable(true)
      setTrigerPosition(pos)
    }
    if (prev === Token.triger && current === Token.letter) { // '@a'
      setSuggestable(true)
      setTrigerPosition(pos - 1)
    }
    if (prev === Token.triger && current === Token.space) { // '@ '
      setSuggestable(false)
    }
    if (prev === Token.triger && current === Token.triger) { // '@@'
      setSuggestable(false)
    }
  }
  const replaceText = (suggest: string) => {
    const newText = text.slice(0, trigerPosition) + suggest + text.slice(caretPosition)
    const newCaretPosition = trigerPosition + countText(suggest)

    setText(newText)
    setCaretPosition(newCaretPosition)
    setSuggestable(false)
  }
  const reset = () => {
    setText('')
  }

  return {
    caretPosition,
    changeText,
    compositing,
    count,
    disabled,
    hideSuggest,
    replaceText,
    reset,
    searchText,
    setCompositing,
    showSuggest,
    suggestable,
    text,
    trigerPosition,
    valid
  }
}
