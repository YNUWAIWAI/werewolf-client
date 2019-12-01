import * as React from 'react'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'

export interface StateProps {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      readonly [id: string]: {
        readonly checked: boolean
        readonly isHover: boolean
        readonly name: string
      }
    }
  }
}
export interface DispatchProps {
  readonly handleAvatarNameChange: (valid: boolean) => (value: string) => void
  readonly handleSelectAvatar: (id: string) => () => void
}
export type Props = StateProps & DispatchProps

export default function SelectHumanAvatarTableBody(props: Props) {
  const rows = props.avatar.allIds.map(id => {
    const avatar = props.avatar.byId[id]
    const additionalClassName = [
      avatar.isHover ? 'hover' : '',
      avatar.checked ? 'selected' : ''
    ]

    return (
      <>
        <SelectAvatarTableBodyCheckBox
          additionalClassName={additionalClassName}
          checked={avatar.checked}
          handleClick={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAvatarName
          additionalClassName={additionalClassName}
          handleChange={props.handleAvatarNameChange}
          handleSelect={props.handleSelectAvatar(id)}
          name={avatar.name}
        />
      </>
    )
  })

  return (
    <>
      {rows}
    </>
  )
}
