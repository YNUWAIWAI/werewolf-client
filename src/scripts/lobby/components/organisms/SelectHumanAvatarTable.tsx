import * as React from 'react'
import SelectHumanAvatarTableBody from '../../containers/SelectHumanAvatarTableBodyContainer'
import SelectHumanAvatarTableHeader from '../molecules/SelectHumanAvatarTableHeader'

export default function SelectHumanAvatarTable() {
  return (
    <div className="lo--select-avatar--table human">
      <SelectHumanAvatarTableHeader />
      <SelectHumanAvatarTableBody />
    </div>
  )
}
