import * as React from 'react'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
}

export default function SelectAvatarTableBodyAccessToken(props: Props) {
  return (
    <div
      className={`lo--select-avatar--table--body--item spacer ${props.additionalClassName.join(' ')}`}
      onClick={props.handleSelect}
    />
  )
}
