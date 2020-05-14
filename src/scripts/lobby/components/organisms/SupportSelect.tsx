import * as React from 'react'
import Close from '../atoms/svg/Close'
import {FormattedMessage} from 'react-intl'
import SupportSelectMemberSelectHeader from '../molecules/SupportSelect/SupportSelectMemberSelectHeader'
import SupportSelectMemberSelectOption from '../molecules/SupportSelect/SupportSelectMemberSelectOption'
import {lobby} from '../../types'

export interface StateProps {
  readonly data: {
    readonly [key in lobby.NumberOfPlayers]: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
export interface DispatchProps {
  readonly handleCloseButtonClick: () => void
  readonly handleSelect: (numberOfPlayers: lobby.NumberOfPlayers) => (member: lobby.Member) => (checked: boolean) => void
}
export type Props = StateProps & DispatchProps

const order: lobby.NumberOfPlayers[] = [
  '15',
  '14',
  '13',
  '12',
  '11',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4'
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
        className="lo--support-select--member-select"
      >
        <SupportSelectMemberSelectHeader />
        {
          order.map(numberOfPlayers => {
            const handleSelect = props.handleSelect(numberOfPlayers)
            const support = props.data[numberOfPlayers]

            return (
              <>
                <SupportSelectMemberSelectOption
                  checked={support.A}
                  handleSelect={handleSelect(lobby.Member.A)}
                  member={lobby.Member.A}
                  numberOfPlayers={Number(numberOfPlayers)}
                />
                <SupportSelectMemberSelectOption
                  checked={support.B}
                  handleSelect={handleSelect(lobby.Member.B)}
                  member={lobby.Member.B}
                  numberOfPlayers={Number(numberOfPlayers)}
                />
                <SupportSelectMemberSelectOption
                  checked={support.C}
                  handleSelect={handleSelect(lobby.Member.C)}
                  member={lobby.Member.C}
                  numberOfPlayers={Number(numberOfPlayers)}
                />
              </>
            )
          })
        }
      </div>
    </div>
  )
}
