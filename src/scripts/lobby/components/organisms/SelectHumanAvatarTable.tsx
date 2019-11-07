import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import SelectHumanAvatarTableBody from '../molecules/SelectHumanAvatarTableBody'
import SelectHumanAvatarTableHeader from '../molecules/SelectHumanAvatarTableHeader'
import {lobby} from '../../types'

interface Props {
}

export default function SelectHumanAvatarTable(props: Props) {
  return (
    <div className="lo--select-avatar--table">
      <SelectHumanAvatarTableHeader />
      <SelectHumanAvatarTableBody />
    </div>
  )
}
