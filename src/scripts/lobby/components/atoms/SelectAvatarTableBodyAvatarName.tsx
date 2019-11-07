import * as React from 'react'
import TextInput from './TextInput'

interface Props {
  handleChange: (valid: boolean) => (value: string) => void
  name: string
}

export default function SelectAvatarTableBodyAvatarName(props: Props) {
  return (
    <div className="lo--select-avatar--table--body--item avatar-name">
      <TextInput
        className="input"
        handleChange={props.handleChange}
        initialValue={props.name}
        max={15}
        min={5}
        placeholder={props.name}
        required
      />
    </div>
  )
}
