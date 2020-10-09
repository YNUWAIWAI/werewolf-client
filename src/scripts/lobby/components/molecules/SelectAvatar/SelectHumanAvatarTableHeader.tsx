import * as React from 'react'
import {SelectAvatarTableHeaderItem} from '../../atoms/SelectAvatarTable/SelectAvatarTableHeaderItem'

export const SelectHumanAvatarTableHeader: React.FC<{}> = () => (
  <>
    <SelectAvatarTableHeaderItem type="check-box" />
    <SelectAvatarTableHeaderItem type="avatar" />
    <SelectAvatarTableHeaderItem type="language" />
    <div className="lo--select-avatar--table--header--item spacer" />
    <div className="lo--select-avatar--table--header--item spacer" />
    <div className="lo--select-avatar--table--header--item spacer" />
    <div className="lo--select-avatar--table--header--item spacer" />
    <div className="lo--select-avatar--table--header--item spacer" />
  </>
)
SelectHumanAvatarTableHeader.displayName = 'SelectHumanAvatarTableHeader'
