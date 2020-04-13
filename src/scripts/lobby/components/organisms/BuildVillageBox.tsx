import * as React from 'react'
import BuildVillageCellComment from '../molecules/BuildVillage/BuildVillageCellComment'
import BuildVillageCellHostName from '../molecules/BuildVillage/BuildVillageCellHostName'
import BuildVillageCellMemberSelect from '../molecules/BuildVillage/BuildVillageCellMemberSelect'
import BuildVillageCellSetup from '../molecules/BuildVillage/BuildVillageCellSetup'
import BuildVillageCellVillageName from '../molecules/BuildVillage/BuildVillageCellVillageName'
import {getCastFromNumberOfPlayers} from '../../util'
import {lobby} from '../../types'

type PropName = 'avatar' | 'comment' | 'hostName' | 'member' | 'numberOfPlayers' | 'numberOfRobots' | 'villageName'
type NumberPropName = Extract<PropName, 'numberOfPlayers' | 'numberOfRobots'>
type TextPropName = Extract<PropName, 'comment' | 'villageName'>

export interface StateProps {
  readonly navigatable: boolean
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly numberOfPlayers: boolean
    readonly numberOfRobots: boolean
    readonly villageName: boolean
  }
  readonly value: {
    readonly avatar: lobby.Avatar
    readonly comment: string
    readonly hostName: string
    readonly numberOfHumans: number
    readonly numberOfPlayers: number
    readonly numberOfRobots: number
    readonly villageName: string
  }
}
export interface DispatchProps {
  readonly handleAvatarChange: (valid: boolean) => (value: lobby.Avatar) => void
  readonly handleMemberChange: (valid: boolean) => (value: lobby.Member) => void
  readonly handleNumberChange: (propName: NumberPropName) => (valid: boolean) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (valid: boolean) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (valid: boolean) => void
}
type Props = StateProps & DispatchProps

export default function BuildVillageBox(props: Props) {
  const isFiexdAvatar = props.value.avatar === lobby.Avatar.fixed

  return (
    <div className="lo--village--item build">
      <BuildVillageCellVillageName
        handleValueChange={props.handleTextChange('villageName')}
        isFiexdAvatar={isFiexdAvatar}
        navigatable={props.navigatable}
        valid={props.validity.villageName}
        value={props.value.villageName}
      />
      <BuildVillageCellHostName
        isFiexdAvatar={isFiexdAvatar}
        value={props.value.hostName}
      />
      <BuildVillageCellSetup
        handleAvatarChange={props.handleAvatarChange}
        handleNumberOfPlayersChange={props.handleNumberChange('numberOfPlayers')}
        navigatable={props.navigatable}
        validity={{
          avatar: props.validity.avatar,
          numberOfPlayers: props.validity.numberOfPlayers
        }}
        value={{
          avatar: props.value.avatar,
          numberOfPlayers: props.value.numberOfPlayers
        }}
      />
      <BuildVillageCellMemberSelect
        handleMemberChange={props.handleMemberChange}
        handleNumberChange={props.handleNumberChange('numberOfRobots')}
        navigatable={props.navigatable}
        role={getCastFromNumberOfPlayers(props.value.numberOfPlayers)}
        validity={{
          numberOfRobots: props.validity.numberOfRobots
        }}
        value={{
          numberOfHumans: props.value.numberOfHumans,
          numberOfPlayers: props.value.numberOfPlayers,
          numberOfRobots: props.value.numberOfRobots
        }}
      />
      <BuildVillageCellComment
        handleValueChange={props.handleTextChange('comment')}
        navigatable={props.navigatable}
        valid={props.validity.comment}
        value={props.value.comment}
      />
    </div>
  )
}
