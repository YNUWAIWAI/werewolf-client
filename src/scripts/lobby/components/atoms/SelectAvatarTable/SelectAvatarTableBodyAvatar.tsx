import * as React from 'react'
import {SelectAvatarTableBodyAvatarImage} from './SelectAvatarTableBodyAvatar/SelectAvatarTableBodyAvatarImage'
import {SelectAvatarTableBodyAvatarName} from './SelectAvatarTableBodyAvatar/SelectAvatarTableBodyAvatarName'

interface Props {
  readonly additionalClassName: string[]
  readonly handleAvatarImageClick: (image: string) => void
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly handleSelect: () => void
  readonly name: string
  readonly image: string
  readonly navigatable: boolean
}

export const SelectAvatarTableBodyAvatar: React.FC<Props> = props => {
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item avatar ${props.additionalClassName.join(' ')}`}
      onClick={handleSelect}
    >
      <SelectAvatarTableBodyAvatarImage
        additionalClassName={props.additionalClassName}
        handleClick={props.handleAvatarImageClick}
        handleSelect={props.handleSelect}
        image={props.image}
        navigatable={props.navigatable}
      />
      <SelectAvatarTableBodyAvatarName
        additionalClassName={props.additionalClassName}
        handleChange={props.handleAvatarNameChange}
        handleSelect={props.handleSelect}
        name={props.name}
        navigatable={props.navigatable}
      />
    </div>
  )
}
SelectAvatarTableBodyAvatar.displayName = 'SelectAvatarTableBodyAvatar'
