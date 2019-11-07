import * as React from 'react'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import {lobby} from '../../types'

interface Props {}

export default function SelectHumanAvatarTableBody(props: Props) {
  return (
    <div className="lo--select-avatar--table--body human">
      <SelectAvatarTableBodyCheckBox />
      <SelectAvatarTableBodyAvatarName />
      <SelectAvatarTableBodyCheckBox />
      <SelectAvatarTableBodyAvatarName />
    </div>
  )
}
