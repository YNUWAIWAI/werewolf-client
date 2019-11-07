import * as React from 'react'

interface Props {
  checked: boolean
}

export default function SelectAvatarTableBodyCheckBox(props: Props) {
  return (
    <div className="lo--select-avatar--table--body--item check-box">
      <input
        checked={props.checked}
        type="checkbox"
      />
    </div>
  )
}
