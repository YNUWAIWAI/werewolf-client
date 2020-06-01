import * as React from 'react'
import {
  countText,
  isValidTextLength
} from '../util'

interface TextInput {
  readonly availableToSend: boolean
  readonly maxLengthOfUnicodeCodePoints: number
  readonly text: string
}

export const useTextInput = (initialValue: TextInput) => {
  const [caretPosition, setCaretPosition] = React.useState(0)
  const [compositing, setCompositing] = React.useState(false)
  const [text, setText] = React.useState(initialValue.text)
  const [trigerPosition, setTrigerPosition] = React.useState(0)
  const count = countText(text)
  const valid = isValidTextLength(text, initialValue.maxLengthOfUnicodeCodePoints, 1)
  const disabled = !valid || !initialValue.availableToSend

  return {
    caretPosition,
    compositing,
    count,
    disabled,
    setCaretPosition,
    setCompositing,
    setText,
    setTrigerPosition,
    text,
    trigerPosition,
    valid
  }
}
