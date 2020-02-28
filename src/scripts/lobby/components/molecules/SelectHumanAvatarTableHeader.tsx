import * as React from 'react'
import SelectAvatarTableHeaderItem from '../atoms/SelectAvatarTable/SelectAvatarTableHeaderItem'

export default function SelectHumanAvatarTableHeader() {
  return (
    <>
      <SelectAvatarTableHeaderItem type="check-box" />
      <SelectAvatarTableHeaderItem type="avatar-name" />
      <SelectAvatarTableHeaderItem type="language" />
      <SelectAvatarTableHeaderItem type="image" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
    </>
  )
}
