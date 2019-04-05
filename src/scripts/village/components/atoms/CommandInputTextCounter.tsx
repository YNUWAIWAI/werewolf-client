import * as React from 'react'

interface Props {
  readonly textCount: number
  readonly valid: boolean
}

export default function CommandInputTextCounter(props: Props) {
  return (
    <span className={`vi--command--input--char ${props.valid ? '' : 'error'}`}>
      {props.textCount}
    </span>
  )
}
