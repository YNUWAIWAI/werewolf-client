import * as React from 'react'
import SelectHumanAvatarTableBody from '../../containers/SelectHumanAvatarTableBodyContainer'
import {SelectHumanAvatarTableHeader} from '../molecules/SelectHumanAvatarTableHeader'

export const SelectHumanAvatarTable: React.FC<{}> = () => (
  <div className="lo--select-avatar--table human">
    <SelectHumanAvatarTableHeader />
    <SelectHumanAvatarTableBody />
  </div>
)
SelectHumanAvatarTable.displayName = 'SelectHumanAvatarTable'
