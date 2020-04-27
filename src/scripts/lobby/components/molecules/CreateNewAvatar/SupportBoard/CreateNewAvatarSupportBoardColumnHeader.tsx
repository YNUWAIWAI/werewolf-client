import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../../types'

interface Props {
  readonly className: string
}

export default function CreateNewAvatarSupportBoardColumnHeader(props: Props) {
  return (
    <>
      <div
        className={props.className}
      >
        <FormattedMessage
          id="CreateNewAvatarSupportBoardColumnHeader.numberOfPlayers"
        />
      </div>
      <div
        className={props.className}
      >
        {lobby.Member.A}
      </div>
      <div
        className={props.className}
      >
        {lobby.Member.B}
      </div>
      <div
        className={props.className}
      >
        {lobby.Member.C}
      </div>
    </>
  )
}
