import * as React from 'react'
import CreateNewAvatarSupportBoardColumnHeader from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardColumnHeader'
import CreateNewAvatarSupportBoardHover from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardHover'
import CreateNewAvatarSupportBoardRow from '../molecules/CreateNewAvatar/SupportBoard/CreateNewAvatarSupportBoardRow'
import {lobby} from '../../types'

interface OwnProps {
  readonly className: string
}
type NumberOfPlayers = '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15'
export interface StateProps {
  readonly data: {
    readonly [key in NumberOfPlayers]: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
type Props = OwnProps & StateProps
const order: NumberOfPlayers[] = [
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

export default function CreateNewAvatarSupportBoard(props: Props) {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div
      className={props.className}
      onMouseLeave={() => setIsHover(false)}
      onMouseOver={() => setIsHover(true)}
    >
      <CreateNewAvatarSupportBoardColumnHeader
        className={`${props.className}--cell`}
      />
      {
        order.map(numberOfPlayers => (
          <CreateNewAvatarSupportBoardRow
            className={`${props.className}--cell`}
            key={numberOfPlayers}
            numberOfPlayers={Number(numberOfPlayers)}
            support={props.data[numberOfPlayers]}
          />
        ))
      }
      <CreateNewAvatarSupportBoardHover
        className={`${props.className}--hover`}
        isHover={isHover}
      />
    </div>
  )
}
