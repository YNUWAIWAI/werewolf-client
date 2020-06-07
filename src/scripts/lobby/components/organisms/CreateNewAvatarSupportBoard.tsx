import * as React from 'react'
import {CreateNewAvatarSupportBoardColumnHeader} from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardColumnHeader'
import {CreateNewAvatarSupportBoardHover} from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardHover'
import {CreateNewAvatarSupportBoardRow} from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardRow'
import {lobby} from '../../types'

type NumberOfPlayers = '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15'
export interface StateProps {
  readonly data: {
    readonly [key in NumberOfPlayers]: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
export interface DispatchProps {
  readonly handleSupportBoardClick: () => void
}

type Props = StateProps & DispatchProps
const order: NumberOfPlayers[] = [
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

export const CreateNewAvatarSupportBoard: React.FC<Props> = props => {
  const [isHover, setIsHover] = React.useState(false)
  const className = 'lo--create-new-avatar--support-board'

  return (
    <div
      className={className}
      onClick={props.handleSupportBoardClick}
      onMouseLeave={() => setIsHover(false)}
      onMouseOver={() => setIsHover(true)}
    >
      <CreateNewAvatarSupportBoardColumnHeader
        className={`${className}--cell`}
      />
      {
        order.map(numberOfPlayers => (
          <CreateNewAvatarSupportBoardRow
            className={`${className}--cell`}
            key={numberOfPlayers}
            numberOfPlayers={Number(numberOfPlayers)}
            support={props.data[numberOfPlayers]}
          />
        ))
      }
      <CreateNewAvatarSupportBoardHover
        className={`${className}--hover`}
        visible={isHover}
      />
    </div>
  )
}
CreateNewAvatarSupportBoard.displayName = 'CreateNewAvatarSupportBoard'
