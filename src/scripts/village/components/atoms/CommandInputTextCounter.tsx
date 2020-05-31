import * as React from 'react'

interface Props {
  readonly textCount: number
  readonly valid: boolean
}

export const CommandInputTextCounter: React.FC<Props> = props => (
  <span className={`vi--command--input--char ${props.valid ? '' : 'error'}`}>
    {props.textCount}
  </span>
)
CommandInputTextCounter.displayName = 'CommandInputTextCounter'
