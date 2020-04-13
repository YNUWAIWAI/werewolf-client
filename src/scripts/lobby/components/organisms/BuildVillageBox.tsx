import * as React from 'react'
import AvatarSelect from '../atoms/Select/AvatarSelect'
import BuildVillageCellComment from '../molecules/BuildVillage/BuildVillageCellComment'
import BuildVillageCellHostName from '../molecules/BuildVillage/BuildVillageCellHostName'
import BuildVillageCellVillageName from '../molecules/BuildVillage/BuildVillageCellVillageName'
import {FormattedMessage} from 'react-intl'
import MemberSelect from '../molecules/MemberSelect'
import NumberSelect from '../atoms/Select/NumberSelect'
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
  readonly handleAvatarChange: (value: lobby.Avatar) => void
  readonly handleMemberChange: (value: lobby.Member) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (valid: boolean) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (valid: boolean) => void
}
type Props = StateProps & DispatchProps

export default function BuildVillageBox(props: Props) {
  const handleChange = (propName: PropName) => (valid: boolean) => (value: boolean | number | string | lobby.Avatar | lobby.Member) => {
    if (!valid) {
      props.handleValidityChange(propName)(false)

      return
    }
    props.handleValidityChange(propName)(true)
    switch (propName) {
      case 'avatar': {
        const avatar = [lobby.Avatar.fixed, lobby.Avatar.random]
        const maybe = avatar.find(v => v === value)

        if (maybe) {
          props.handleAvatarChange(maybe)
        }

        return
      }
      case 'comment':
      case 'villageName':
        if (typeof value === 'string') {
          props.handleTextChange(propName)(value)
        }

        return
      case 'member': {
        const member = [lobby.Member.A, lobby.Member.B, lobby.Member.C]
        const maybe = member.find(v => v === value)

        if (maybe) {
          props.handleMemberChange(maybe)
        }

        return
      }
      case 'numberOfPlayers':
      case 'numberOfRobots':
        if (typeof value === 'number') {
          props.handleNumberChange(propName)(value)
        }

        return
      default:
        throw Error(`Unknown: ${propName}`)
    }
  }
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
      <FormattedMessage
        id="BuildVillage.label(setup)"
      >
        {
          text => (
            <div className="lo--village--item--prop setup">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div className={`lo--village--item--val setup1 build ${props.validity.numberOfPlayers ? '' : 'invalid'}`}>
        <NumberSelect
          ascendingOrder={false}
          className="lo--village--item--val--setup1--select"
          defaultValue={props.value.numberOfPlayers}
          from={4}
          handleChange={handleChange('numberOfPlayers')}
          navigatable={props.navigatable}
          to={15}
          type="player"
        />
      </div>
      <div className={`lo--village--item--val setup2 build ${props.validity.avatar ? '' : 'invalid'}`}>
        <AvatarSelect
          className="lo--village--item--val--setup2--select"
          defaultValue={props.value.avatar}
          handleChange={handleChange('avatar')}
          navigatable={props.navigatable}
          type="buildVillage"
        />
      </div>
      <MemberSelect
        handleMemberChange={handleChange('member')}
        handleNumberChange={handleChange('numberOfRobots')}
        navigatable={props.navigatable}
        numberOfHumans={props.value.numberOfHumans}
        numberOfPlayers={props.value.numberOfPlayers}
        numberOfRobots={props.value.numberOfRobots}
        role={getCastFromNumberOfPlayers(props.value.numberOfPlayers)}
        validity={{
          numberOfRobots: props.validity.numberOfRobots
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
