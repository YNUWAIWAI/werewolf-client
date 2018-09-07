// @flow
import type {Avatar, Member} from 'lobby'
import AvatarSelect from './AvatarSelect'
import NumberSelect from './NumberSelect'
import React from 'react'
import SelectMember from './SelectMember'
import TextInput from './TextInput'
import TextareaInput from './TextareaInput'
import {getCastFromNumberOfPlayers} from '../constants/Cast'

type Props = {
  +handleAvatarChange: Avatar => void,
  +handleMemberChange: Member => void,
  +handleNumberChange: string => number => void,
  +handleTextChange: string => string => void,
  +handleValidityChange: string => boolean => void,
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +numberOfPlayers: boolean,
    +numberOfRobots: boolean,
    +villageName: boolean
  },
  +village: {
    +avatar: Avatar,
    +comment: string,
    +hostName: string,
    +numberOfHumans: number,
    +numberOfPlayers: number,
    +numberOfRobots: number,
    +villageName: string
  }
}

export default function BuildVillageBox(props: Props) {
  const handleChange = propName => valid => value => {
    if (!valid) {
      props.handleValidityChange(propName)(false)

      return
    }
    props.handleValidityChange(propName)(true)
    switch (propName) {
      case 'avatar': {
        const avatar: Avatar[] = ['fixed', 'random']
        const maybe = avatar.find(v => v === value)

        if (maybe) {
          props.handleAvatarChange(maybe)
        }

        return
      }
      case 'member': {
        const member: Member[] = ['A', 'B', 'C']
        const maybe = member.find(v => v === value)

        if (maybe) {
          props.handleMemberChange(maybe)
        }

        return
      }
      case 'comment':
      case 'hostName':
      case 'villageName':
        if (typeof value === 'string') {
          props.handleTextChange(propName)(value)
        }

        return
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

  return (
    <div className="village--item build">
      <div className="village--item--village-name--prop">
        {'Village Name'}
      </div>
      <TextInput
        className={`village--item--village-name--val ${props.validity.villageName ? '' : 'invalid'}`}
        handleChange={handleChange('villageName')}
        initialValue={props.village.villageName}
        max={30}
        min={5}
        placeholder="5-30 chars"
        required
      />

      <div className="village--item--host-name--prop">
        {'Host Name'}
      </div>
      <TextInput
        className={`village--item--host-name--val ${props.validity.hostName ? '' : 'invalid'}`}
        handleChange={handleChange('hostName')}
        initialValue={props.village.hostName}
        max={15}
        min={5}
        placeholder="5-15 chars"
        required
      />

      <div className="village--item--setup--prop">
        {'Setup'}
      </div>
      <div className={`village--item--setup--val1 ${props.validity.numberOfPlayers ? '' : 'invalid'}`}>
        <NumberSelect
          ascendingOrder={false}
          className="village--item--setup--val1--select"
          defaultValue={props.village.numberOfPlayers}
          from={4}
          handleChange={handleChange('numberOfPlayers')}
          name="numberOfPlayers"
          suffix="players"
          to={15}
        />
      </div>
      <div className={`village--item--setup--val2 ${props.validity.avatar ? '' : 'invalid'}`}>
        <AvatarSelect
          className="village--item--setup--val2--select"
          defaultValue={props.village.avatar}
          handleChange={handleChange('avatar')}
          type="buildVillage"
        />
      </div>

      <SelectMember
        handleMemberChange={handleChange('member')}
        handleNumberChange={handleChange('numberOfRobots')}
        numberOfHumans={props.village.numberOfHumans}
        numberOfPlayers={props.village.numberOfPlayers}
        numberOfRobots={props.village.numberOfRobots}
        role={getCastFromNumberOfPlayers(props.village.numberOfPlayers)}
        validity={{
          numberOfRobots: props.validity.numberOfRobots
        }}
      />

      <div className="village--item--comment--prop">
        {'Comment'}
      </div>
      <TextareaInput
        className={`village--item--comment--val ${props.validity.comment ? '' : 'invalid'}`}
        handleChange={handleChange('comment')}
        initialValue={props.village.comment}
        max={100}
        min={0}
        placeholder="0-100 chars"
        required={false}
        rows={3}
      />
    </div>
  )
}
