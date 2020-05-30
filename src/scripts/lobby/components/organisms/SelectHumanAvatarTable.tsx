import * as React from 'react'
import {SelectHumanAvatarTableBodyContainer} from '../../containers/SelectHumanAvatarTableBodyContainer'
import {SelectHumanAvatarTableHeader} from '../molecules/SelectHumanAvatarTableHeader'

export const SelectHumanAvatarTable: React.FC<{}> = () => (
  <div className="lo--select-avatar--table human">
    <SelectHumanAvatarTableHeader />
    <SelectHumanAvatarTableBodyContainer />
  </div>
)
SelectHumanAvatarTable.displayName = 'SelectHumanAvatarTable'
