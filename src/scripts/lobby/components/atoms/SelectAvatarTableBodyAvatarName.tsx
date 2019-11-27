import * as React from 'react'
import TextInput from './TextInput'

interface Props {
  readonly additionalClassName: string[]
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly handleSelect: () => void
  readonly name: string
}

export default function SelectAvatarTableBodyAvatarName(props: Props) {
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item avatar-name ${props.additionalClassName.join(' ')}`}
      onClick={handleSelect}
    >
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
