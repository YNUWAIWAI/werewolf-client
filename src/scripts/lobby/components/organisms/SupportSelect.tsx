import * as React from 'react'
import Close from '../atoms/svg/Close'
import {FormattedMessage} from 'react-intl'

import MemberRoleList from '../molecules/MemberRoleList'
import {getCastFromNumberOfPlayers} from '../../util'
import {lobby} from '../../types'

export interface StateProps {
  readonly selectedImage: string
  readonly imageList: string[]
}
export interface DispatchProps {
  readonly handleCloseButtonClick: () => void
  readonly handleSelect: (image: string) => void
}
export type Props = StateProps & DispatchProps

const order = [
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15'
]

export default function SupportSelect(props: Props) {
  return (
    <div className="lo--support-select">
      <button
        className="lo--support-select--close"
        onClick={() => props.handleCloseButtonClick()}
      >
        <Close />
      </button>
      <div
        className="lo--support-select--description"
      >
        <FormattedMessage
          id="SupportSelect.description"
        />
      </div>
      <div
        className="lo--support-select--member-list"
      >
        {
          order.map(numberOfPlayers => {
            const role = getCastFromNumberOfPlayers(Number(numberOfPlayers))

            return (
              <>
                <MemberRoleList
                  className="lo--support-select--member-list--item"
                  role={role[lobby.Member.A]}
                />
                <MemberRoleList
                  className="lo--support-select--member-list--item"
                  role={role[lobby.Member.B]}
                />
                <MemberRoleList
                  className="lo--support-select--member-list--item"
                  role={role[lobby.Member.C]}
                />
              </>
            )
          })
        }
      </div>
    </div>
  )
}
