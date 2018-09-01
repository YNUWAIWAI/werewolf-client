// @flow
import type {Avatar, Member} from 'lobby'
import AvatarSelect from './AvatarSelect'
import NumberSelect from './NumberSelect'
import React from 'react'
import SelectableMember from './SelectableMember'
import TextInput from './TextInput'
import TextareaInput from './TextareaInput'
import {getCastFromNumberOfPlayers} from '../constants/Cast'

type Props = {
  +handleAvatarChange: Avatar => void,
  +handleMemberChange: Member => void,
  +handleNumberChange: string => number => void,
  +handleTextChange: string => string => void,
  +handleValidityChange: string => boolean => void,
  +numberOfHumans: number,
  +numberOfPlayers: number,
  +numberOfRobots: number
}

export default function EditableVillageItem(props: Props) {
  const handleChange = propName => valid => value => {
    console.log(propName, valid, value)
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
        className="village--item--village-name--val"
        handleChange={handleChange('villageName')}
        initialValue={'Alice\'s Village'}
        max={30}
        min={5}
        placeholder="5-30 chars"
        required
      />

      <div className="village--item--host-name--prop">
        {'Host Name'}
      </div>
      <TextInput
        className="village--item--host-name--val"
        handleChange={handleChange('hostName')}
        initialValue="Alice"
        max={15}
        min={5}
        placeholder="5-15 chars"
        required
      />

      <div className="village--item--setup--prop">
        {'Setup'}
      </div>
      <div className="village--item--setup--val1">
        <NumberSelect
          ascendingOrder={false}
          className="village--item--setup--val1--select"
          defaultValue={15}
          from={4}
          handleChange={handleChange('numberOfPlayers')}
          name="numberOfPlayers"
          suffix="players"
          to={15}
        />
      </div>
      <div className="village--item--setup--val2">
        <AvatarSelect
          className="village--item--setup--val2--select"
          handleChange={handleChange('avatar')}
          type="buildVillage"
        />
      </div>

      <SelectableMember
        handleMemberChange={handleChange('member')}
        handleNumberChange={handleChange('numberOfRobots')}
        numberOfHumans={props.numberOfHumans}
        numberOfPlayers={props.numberOfPlayers}
        numberOfRobots={props.numberOfRobots}
        role={getCastFromNumberOfPlayers(props.numberOfPlayers)}
      />

      <div className="village--item--comment--prop">
        {'Comment'}
      </div>
      <TextareaInput
        className="village--item--comment--val"
        handleChange={handleChange('comment')}
        initialValue=""
        max={100}
        min={0}
        placeholder="0-100 chars"
        required={false}
        rows={3}
      />
    </div>
  )
}
