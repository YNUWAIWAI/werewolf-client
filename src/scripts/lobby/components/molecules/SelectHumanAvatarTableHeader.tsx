import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export default function SelectHumanAvatarTableHeader() {
  return (
    <>
      <div className="lo--select-avatar--table--header--item check-box" />
      <FormattedMessage
        id="SelectAvatarTableHeader(avatarName)"
      >
        {
          text => (
            <div className="lo--select-avatar--table--header--item avatar-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
      <div className="lo--select-avatar--table--header--item spacer" />
    </>
  )
}
