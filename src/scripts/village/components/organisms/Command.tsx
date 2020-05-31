import * as React from 'react'

export interface StateProps {
  readonly content: React.ReactElement<unknown>
  readonly hide: boolean
}
export type Props = StateProps

export const Command: React.FC<Props> = props => (
  <div className={`vi--command ${props.hide ? 'hidden' : ''}`}>
    {props.content}
  </div>
)
Command.displayName = 'Command'
