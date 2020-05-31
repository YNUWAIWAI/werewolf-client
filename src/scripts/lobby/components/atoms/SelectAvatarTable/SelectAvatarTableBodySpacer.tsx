import * as React from 'react'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
}

export const SelectAvatarTableBodySpacer: React.FC<Props> = props => (
  <div
    className={`lo--select-avatar--table--body--item spacer ${props.additionalClassName.join(' ')}`}
    onClick={props.handleSelect}
  />
)
SelectAvatarTableBodySpacer.displayName = ' SelectAvatarTableBodySpacer'
