import * as React from 'react'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodySpacer from '../atoms/SelectAvatarTableBodySpacer'
import {lobby} from '../../types'

export interface StateProps {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      readonly [id: string]: {
        readonly checked: boolean
        readonly image: string
        readonly isHover: boolean
        readonly language: lobby.Language
        readonly name: string
      }
    }
  }
}
export interface DispatchProps {
  readonly handleAvatarNameChange: (token: lobby.Token) => (valid: boolean) => (value: string) => void
  readonly handleHoverAvatar: (id: string) => () => void
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

    return [
      <SelectAvatarTableBodyCheckBox
        additionalClassName={additionalClassName}
        checked={avatar.checked}
        handleClick={props.handleSelectAvatar(id)}
        key={`checkBox${id}`}
      />,
      <SelectAvatarTableBodyAvatarName
        additionalClassName={additionalClassName}
        handleChange={props.handleAvatarNameChange(id)}
        handleSelect={props.handleSelectAvatar(id)}
        key={`avatarName${id}`}
        name={avatar.name}
      />,
      <SelectAvatarTableBodySpacer
        additionalClassName={additionalClassName}
        handleSelect={props.handleSelectAvatar(id)}
        key={`spacer${id}-1`}
      />,
      <SelectAvatarTableBodySpacer
        additionalClassName={additionalClassName}
        handleSelect={props.handleSelectAvatar(id)}
        key={`spacer${id}-2`}
      />,
      <SelectAvatarTableBodySpacer
        additionalClassName={additionalClassName}
        handleSelect={props.handleSelectAvatar(id)}
        key={`spacer${id}-3`}
      />,
      <SelectAvatarTableBodySpacer
        additionalClassName={additionalClassName}
        handleSelect={props.handleSelectAvatar(id)}
        key={`spacer${id}-4`}
      />,
      <SelectAvatarTableBodySpacer
        additionalClassName={additionalClassName}
        handleSelect={props.handleSelectAvatar(id)}
        key={`spacer${id}-5`}
      />
    ]
  })

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {rows}
    </>
  )
}
