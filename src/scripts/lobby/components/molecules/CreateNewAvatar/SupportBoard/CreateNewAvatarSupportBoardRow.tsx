import * as React from 'react'
import {CreateNewAvatarSupportBoardRowCell} from '../../../atoms/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardRowCell'
import {lobby} from '../../../../types'

interface Props {
  readonly className: string
  readonly numberOfPlayers: number
  readonly support: {
    readonly [key in lobby.Member]: boolean
  }
}

export const CreateNewAvatarSupportBoardRow: React.FC<Props> = props => (
  <>
    <div
      className={props.className}
    >
      {props.numberOfPlayers}
    </div>
    <CreateNewAvatarSupportBoardRowCell
      className={props.className}
      support={props.support.A}
    />
    <CreateNewAvatarSupportBoardRowCell
      className={props.className}
      support={props.support.B}
    />
    <CreateNewAvatarSupportBoardRowCell
      className={props.className}
      support={props.support.C}
    />
  </>
)
CreateNewAvatarSupportBoardRow.displayName = 'CreateNewAvatarSupportBoardRow'
