import * as React from 'react'

interface Props {
  readonly additionalClassName: string[]
  readonly checked: boolean
  readonly handleClick: () => void
}

export default function SelectAvatarTableBodyCheckBox(props: Props) {
  return (
    <div
      className={`lo--select-avatar--table--body--item check-box ${props.additionalClassName.join(' ')}`}
      onClick={props.handleClick}
    >
      <input
        checked={props.checked}
        readOnly
        type="checkbox"
      />
    </div>
  )
}
