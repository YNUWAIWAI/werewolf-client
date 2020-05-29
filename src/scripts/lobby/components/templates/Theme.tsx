import * as React from 'react'
import {lobby} from '../../types'

export interface StateProps {
  readonly theme: lobby.Theme
}
export type Props = React.PropsWithChildren<StateProps>

export const Theme: React.FC<Props> = props => (
  <div className={`lo ${props.theme}`}>
    {props.children}
  </div>
)
Theme.displayName = 'Theme'
