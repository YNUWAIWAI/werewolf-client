import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import MemberRoleItem from '../../atoms/MemberRoleItem'
import {ORDERED_ROLE_LIST} from '../../../constants/Role'

interface Props {}

export default function SupportSelectMemberSelectHeader(props: Props) {
  return (
    <>
      <div
        className="lo--support-select--member-select--header--spacer"
      />
      <div
        className="lo--support-select--member-select--header--text"
      >
        <FormattedMessage
          id="SupportSelect.header(numberOfPlayers)"
        />
      </div>
      <div
        className="lo--support-select--member-select--header--text"
      >
        <FormattedMessage
          id="SupportSelect.header(type)"
        />
      </div>
      {
        ORDERED_ROLE_LIST.map(item => (
          <MemberRoleItem
            className="lo--support-select--member-select--header--role"
            id={item.id}
            image={item.image}
            key={item.id}
          />
        ))
      }
    </>
  )
}
