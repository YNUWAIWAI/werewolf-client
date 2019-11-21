import * as React from 'react'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'

export interface StateProps {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      readonly [id: string]: {
        readonly checked: boolean
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

    return (
      <div
        className="lo--select-avatar--table--body--row human"
        key={id}
      >
        <SelectAvatarTableBodyCheckBox
          checked={avatar.checked}
          handleClick={props.handleSelectAvatar(id)}
        />
        <SelectAvatarTableBodyAvatarName
          handleChange={props.handleAvatarNameChange}
          name={avatar.name}
        />
      </div>
    )
  })

  return (
    <div className="lo--select-avatar--table--body">
      {rows}
    </div>
  )
}
