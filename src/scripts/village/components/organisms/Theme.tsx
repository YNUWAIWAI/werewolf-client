import * as React from 'react'
import {village} from '../../types'

export interface StateProps {
  readonly theme: village.Theme
}
export type Props = React.PropsWithChildren<StateProps>

export const Theme: React.FC<Props> = props => (
  <div className={`vi ${props.theme}`}>
    {props.children}
  </div>
)
Theme.displayName = 'Theme'
