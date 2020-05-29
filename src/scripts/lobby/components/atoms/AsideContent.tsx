import * as React from 'react'

interface Props {
  readonly expand?: boolean
}

export const AsideContent: React.FC<Props> = props => (
  <div className={`lo--aside-content ${props.expand ? 'expand' : ''}`}>
    {props.children}
  </div>
)
AsideContent.displayName = 'AsideContent'
