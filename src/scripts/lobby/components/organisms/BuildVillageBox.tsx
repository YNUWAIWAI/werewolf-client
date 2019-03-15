/* global lobby */
import * as React from 'react'
import AvatarSelect from '../atoms/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import MemberSelect from '../molecules/MemberSelect'
import NumberSelect from '../atoms/NumberSelect'
import TextInput from '../atoms/TextInput'
import TextareaInput from '../atoms/TextareaInput'
import {getCastFromNumberOfPlayers} from '../../util'

type PropName = 'avatar' | 'comment' | 'hostName' | 'member' | 'numberOfPlayers' | 'numberOfRobots' | 'villageName'

type NumberPropName = Extract<PropName, 'numberOfPlayers' | 'numberOfRobots'>

type TextPropName = Extract<PropName, 'comment' | 'villageName'>

export interface Props {
  readonly handleAvatarChange: (value: lobby.Avatar) => void
  readonly handleMemberChange: (value: lobby.Member) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (valid: boolean) => void
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
  const villageName = {
    max: 30,
    min: 5
  }
  const comment = {
    max: 100,
    min: 0
  }

  return (
    <div className="lo--village--item build">
      <FormattedMessage
        id="BuildVillage.label(villageName)"
      >
        {
          text =>
            <div className="lo--village--item--prop village-name">
              {text}
            </div>
        }
      </FormattedMessage>
      {
        props.value.avatar === lobby.Avatar.fixed ?
          <FormattedMessage
            id="BuildVillage.placeholder"
            values={villageName}
          >
            {
              text => {
                if (typeof text !== 'string') {
                  return null
                }

                return (
                  <TextInput
                    className={`lo--village--item--val village-name ${props.validity.villageName ? '' : 'invalid'}`}
                    handleChange={handleChange('villageName')}
                    initialValue={props.value.villageName}
                    max={villageName.max}
                    min={villageName.min}
                    placeholder={text}
                    required
                  />
                )
              }
            }
          </FormattedMessage> :
          <FormattedMessage
            id={`BuildVillage.villageName.anonymous(${props.value.villageName})`}
          >
            {
              text =>
                <div
                  className="lo--village--item--val village-name"
                >
                  {text}
                </div>
            }
          </FormattedMessage>
      }
      <FormattedMessage
        id="BuildVillage.label(hostName)"
      >
        {
          text =>
            <div className="lo--village--item--prop host-name">
              {text}
            </div>
        }
      </FormattedMessage>
      {
        props.value.avatar === lobby.Avatar.fixed ?
          <div className="lo--village--item--val host-name">
            {props.value.hostName}
          </div> :
          <FormattedMessage
            id="BuildVillage.hostName.anonymous"
          >
            {
              text =>
                <div className="lo--village--item--val host-name">
                  {text}
                </div>
            }
          </FormattedMessage>
      }
      <FormattedMessage
        id="BuildVillage.label(setup)"
      >
        {
          text =>
            <div className="lo--village--item--prop setup">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className={`lo--village--item--val setup1 build ${props.validity.numberOfPlayers ? '' : 'invalid'}`}>
        <NumberSelect
          ascendingOrder={false}
          className="lo--village--item--val--setup1--select"
          defaultValue={props.value.numberOfPlayers}
          from={4}
          handleChange={handleChange('numberOfPlayers')}
          name="numberOfPlayers"
          to={15}
          type="player"
        />
      </div>
      <div className={`lo--village--item--val setup2 build ${props.validity.avatar ? '' : 'invalid'}`}>
        <AvatarSelect
          className="lo--village--item--val--setup2--select"
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
          text =>
            <div className="lo--village--item--prop comment">
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id="BuildVillage.placeholder"
        values={comment}
      >
        {
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextareaInput
                className={`lo--village--item--val comment ${props.validity.comment ? '' : 'invalid'}`}
                handleChange={handleChange('comment')}
                initialValue={props.value.comment}
                max={comment.max}
                min={comment.min}
                placeholder={text}
                required={false}
                rows={3}
              />
            )
          }
        }
      </FormattedMessage>
    </div>
  )
}
