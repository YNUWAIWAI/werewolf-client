// @flow
import type {Avatar, Member} from 'lobby'
import AvatarSelect from '../atoms/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import MemberSelect from '../molecules/MemberSelect'
import NumberSelect from '../atoms/NumberSelect'
import React from 'react'
import TextInput from '../atoms/TextInput'
import TextareaInput from '../atoms/TextareaInput'
import {getCastFromNumberOfPlayers} from '../../constants/Cast'

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
  +value: {
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
  const villageName = {
    max: 30,
    min: 5
  }
  const comment = {
    max: 100,
    min: 0
  }

  return (
    <div className="village--item build">
      <FormattedMessage
        id="BuildVillage.label(villageName)"
      >
        {
          (text: string) =>
            <div className="village--item--prop village-name">
              {text}
            </div>
        }
      </FormattedMessage>
      {
        props.value.avatar === 'fixed' ?
          <FormattedMessage
            id="BuildVillage.placeholder"
            values={villageName}
          >
            {
              (text: string) =>
                <TextInput
                  className={`village--item--val village-name ${props.validity.villageName ? '' : 'invalid'}`}
                  handleChange={handleChange('villageName')}
                  initialValue={props.value.villageName}
                  max={villageName.max}
                  min={villageName.min}
                  placeholder={text}
                  required
                />
            }
          </FormattedMessage> :
          <div
            className="village--item--val village-name"
          >
            {props.value.villageName}
          </div>
      }
      <FormattedMessage
        id="BuildVillage.label(hostName)"
      >
        {
          (text: string) =>
            <div className="village--item--prop host-name">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--val host-name">
        {props.value.hostName}
      </div>
      <FormattedMessage
        id="BuildVillage.label(setup)"
      >
        {
          (text: string) =>
            <div className="village--item--prop setup">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className={`village--item--val setup1 build ${props.validity.numberOfPlayers ? '' : 'invalid'}`}>
        <NumberSelect
          ascendingOrder={false}
          className="village--item--val--setup1--select"
          defaultValue={props.value.numberOfPlayers}
          from={4}
          handleChange={handleChange('numberOfPlayers')}
          name="numberOfPlayers"
          to={15}
          type="player"
        />
      </div>
      <div className={`village--item--val setup2 build ${props.validity.avatar ? '' : 'invalid'}`}>
        <AvatarSelect
          className="village--item--val--setup2--select"
          defaultValue={props.value.avatar}
          handleChange={handleChange('avatar')}
          type="buildVillage"
        />
      </div>

      <MemberSelect
        handleMemberChange={handleChange('member')}
        handleNumberChange={handleChange('numberOfRobots')}
        numberOfHumans={props.value.numberOfHumans}
        numberOfPlayers={props.value.numberOfPlayers}
        numberOfRobots={props.value.numberOfRobots}
        role={getCastFromNumberOfPlayers(props.value.numberOfPlayers)}
        validity={{
          numberOfRobots: props.validity.numberOfRobots
        }}
      />

      <FormattedMessage
        id="BuildVillage.label(comment)"
      >
        {
          (text: string) =>
            <div className="village--item--prop comment">
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id="BuildVillage.placeholder"
        values={comment}
      >
        {
          (text: string) =>
            <TextareaInput
              className={`village--item--val comment ${props.validity.comment ? '' : 'invalid'}`}
              handleChange={handleChange('comment')}
              initialValue={props.value.comment}
              max={comment.max}
              min={comment.min}
              placeholder={text}
              required={false}
              rows={3}
            />
        }
      </FormattedMessage>
    </div>
  )
}
