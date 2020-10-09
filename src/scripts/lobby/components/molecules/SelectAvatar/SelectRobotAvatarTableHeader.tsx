import * as React from 'react'
import {SelectAvatarTableHeaderItem} from '../../atoms/SelectAvatarTable/SelectAvatarTableHeaderItem'

export const SelectRobotAvatarTableHeader: React.FC<{}> = () => (
  <>
    <SelectAvatarTableHeaderItem type="check-box" />
    <SelectAvatarTableHeaderItem type="avatar" />
    <SelectAvatarTableHeaderItem type="language" />
    <SelectAvatarTableHeaderItem type="status" />
    <SelectAvatarTableHeaderItem type="authorized" />
    <SelectAvatarTableHeaderItem type="test" />
    <SelectAvatarTableHeaderItem type="automation" />
    <SelectAvatarTableHeaderItem type="access-token" />
  </>
)
SelectRobotAvatarTableHeader.displayName = 'SelectRobotAvatarTableHeader'
