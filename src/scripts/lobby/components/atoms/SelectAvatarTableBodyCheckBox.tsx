import * as React from 'react'

interface Props {
  checked: boolean
  handleClick: () => void
}

export default function SelectAvatarTableBodyCheckBox(props: Props) {
  return (
    <div
      className="lo--select-avatar--table--body--item check-box"
      onClick={props.handleClick}
    >
      <input
        checked={props.checked}
        type="checkbox"
      />
    </div>
  )
}
