import * as React from 'react'
import AdvancedSearchProp from '../atoms/AdvancedSearchProp'
import AvatarSelect from '../atoms/Select/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import NumberSelect from '../atoms/Select/NumberSelect'
import TextInput from '../atoms/TextInput'
import TextareaInput from '../atoms/TextareaInput'
import {lobby} from '../../types'

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
  const handleValueChange = (propName: PropName) => (valid: boolean) => (value: boolean | number | string | lobby.Avatar) => {
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
  const handleCheckboxChange = (propName: PropName) => (checked: boolean) => {
    switch (propName) {
      case 'avatar':
        break
      case 'comment':
      case 'hostName':
      case 'maximum':
      case 'minimum':
      case 'villageName':
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
    <div className="lo--advanced-search">
      <AdvancedSearchProp
        checked={props.checked.villageName}
        handleChange={handleCheckboxChange('villageName')}
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
                className="lo--advanced-search--input"
                handleChange={handleValueChange('villageName')}
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
        handleChange={handleCheckboxChange('hostName')}
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
                className="lo--advanced-search--input"
                handleChange={handleValueChange('hostName')}
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
        handleChange={handleCheckboxChange('minimum')}
        name="minimum"
        valid={props.validity.minimum}
      />
      <NumberSelect
        ascendingOrder
        className="lo--advanced-search--input"
        from={4}
        handleChange={handleValueChange('minimum')}
        name="minimum"
        to={15}
        type="player"
      />

      <AdvancedSearchProp
        checked={props.checked.maximum}
        handleChange={handleCheckboxChange('maximum')}
        name="maximum"
        valid={props.validity.maximum}
      />
      <NumberSelect
        ascendingOrder={false}
        className="lo--advanced-search--input"
        from={4}
        handleChange={handleValueChange('maximum')}
        name="maximum"
        to={15}
        type="player"
      />

      <AdvancedSearchProp
        checked={props.checked.avatar}
        handleChange={handleCheckboxChange('avatar')}
        name="avatar"
        valid={props.validity.avatar}
      />
      <AvatarSelect
        className="lo--advanced-search--input"
        defaultValue={lobby.Avatar.random}
        handleChange={handleValueChange('avatar')}
        type="advancedSearch"
      />

      <AdvancedSearchProp
        checked={props.checked.comment}
        handleChange={handleCheckboxChange('comment')}
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
                className="lo--advanced-search--input"
                handleChange={handleValueChange('comment')}
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
