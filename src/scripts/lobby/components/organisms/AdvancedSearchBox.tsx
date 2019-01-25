import * as React from 'react'
import AdvancedSearchProp from '../atoms/AdvancedSearchProp'
import AvatarSelect from '../atoms/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import NumberSelect from '../atoms/NumberSelect'
import TextInput from '../atoms/TextInput'
import TextareaInput from '../atoms/TextareaInput'

type PropName = 'avatar' | 'comment' | 'hostName' | 'maximum' | 'minimum' | 'villageName'

type NumberPropName = Extract<PropName, 'maximum' | 'minimum'>

type TextPropName = Extract<PropName, 'comment' | 'hostName' | 'villageName'>

export interface Props {
  readonly checked: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
  readonly handleAvatarChange: (avatar: lobby.Avatar) => void
  readonly handleCheckboxChange: (propName: PropName) => (value: boolean) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (valid: boolean) => void
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
}

export default function AdvancedSearchBox(props: Props) {
  const handleChange = (propName: PropName) => (valid: boolean) => (value: boolean | number | string | lobby.Avatar) => {
    switch (propName) {
      case 'avatar': {
        const avatar = [lobby.Avatar.fixed, lobby.Avatar.random, lobby.Avatar.unspecified]
        const maybe = avatar.find(v => v === value)

        if (maybe) {
          props.handleAvatarChange(maybe)
        }
        break
      }
      case 'comment':
      case 'hostName':
      case 'villageName':
        if (typeof value === 'string') {
          props.handleTextChange(propName)(value)
        }
        break
      case 'maximum':
      case 'minimum':
        if (typeof value === 'number') {
          props.handleNumberChange(propName)(value)
        }
        break
      default:
        throw Error(`Unknown: ${propName}`)
    }
    if (valid && value !== '') {
      props.handleCheckboxChange(propName)(true)
      props.handleValidityChange(propName)(true)
    } else {
      props.handleCheckboxChange(propName)(false)
      props.handleValidityChange(propName)(false)
    }
  }
  const handleClick = (propName: PropName) => (checked: boolean) => {
    switch (propName) {
      case 'avatar':
        break
      case 'comment':
      case 'hostName':
      case 'villageName':
      case 'maximum':
      case 'minimum':
        props.handleCheckboxChange(propName)(checked)
        break
      default:
        throw Error(`Unknown: ${propName}`)
    }
  }
  const comment = {
    max: 100,
    min: 0
  }
  const hostName = {
    max: 15,
    min: 5
  }
  const villageName = {
    max: 30,
    min: 5
  }

  return (
    <div className="advanced-search">
      <AdvancedSearchProp
        checked={props.checked.villageName}
        handleClick={handleClick('villageName')}
        name="villageName"
        valid={props.validity.villageName}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(villageName)"
        values={villageName}
      >
        {
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextInput
                className="advanced-search--input"
                handleChange={handleChange('villageName')}
                initialValue=""
                max={villageName.max}
                min={villageName.min}
                placeholder={text}
                required={false}
              />
            )
          }
        }
      </FormattedMessage>
      <AdvancedSearchProp
        checked={props.checked.hostName}
        handleClick={handleClick('hostName')}
        name="hostName"
        valid={props.validity.hostName}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(hostName)"
        values={hostName}
      >
        {
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextInput
                className="advanced-search--input"
                handleChange={handleChange('hostName')}
                initialValue=""
                max={hostName.max}
                min={hostName.min}
                placeholder={text}
                required={false}
              />
            )
          }
        }
      </FormattedMessage>
      <AdvancedSearchProp
        checked={props.checked.minimum}
        handleClick={handleClick('minimum')}
        name="minimum"
        valid={props.validity.minimum}
      />
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('minimum')}
        name="minimum"
        to={15}
        type="player"
      />

      <AdvancedSearchProp
        checked={props.checked.maximum}
        handleClick={handleClick('maximum')}
        name="maximum"
        valid={props.validity.maximum}
      />
      <NumberSelect
        ascendingOrder={false}
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('maximum')}
        name="maximum"
        to={15}
        type="player"
      />

      <AdvancedSearchProp
        checked={props.checked.avatar}
        handleClick={handleClick('avatar')}
        name="avatar"
        valid={props.validity.avatar}
      />
      <AvatarSelect
        className="advanced-search--input"
        defaultValue={lobby.Avatar.random}
        handleChange={handleChange('avatar')}
        type="advancedSearch"
      />

      <AdvancedSearchProp
        checked={props.checked.comment}
        handleClick={handleClick('comment')}
        name="comment"
        valid={props.validity.comment}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(comment)"
        values={comment}
      >
        {
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextareaInput
                className="advanced-search--input"
                handleChange={handleChange('comment')}
                initialValue=""
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
