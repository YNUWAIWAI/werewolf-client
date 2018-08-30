// @flow
/* eslint react/forbid-component-props: 0 */
import AdvancedSearchProp from './AdvancedSearchProp'
import type {Avatar} from 'lobby'
import AvatarSelect from './AvatarSelect2'
import NumberSelect from './NumberSelect2'
import React from 'react'
import TextInput from './TextInput'
import TextareaInput from './TextareaInput'

export type Props = {
  +checked: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +maximum: boolean,
    +minimum: boolean,
    +villageName: boolean
  },
  +handleAvatarChange: Avatar => void,
  +handleCheckboxChange: ('avatar' | 'comment' | 'hostName' | 'maximum' | 'minimum' | 'villageName') => boolean => void,
  +handleNumberChange: ('maximum' | 'minimum') => number => void,
  +handleTextChange: ('comment' | 'hostName' | 'villageName') => string => void,
  +handleValidityChange: ('avatar' | 'comment' | 'hostName' | 'maximum' | 'minimum' | 'villageName') => boolean => void,
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +maximum: boolean,
    +minimum: boolean,
    +villageName: boolean
  }
}

export default function AdvancedSearchBox(props: Props) {
  const handleChange = propName => valid => value => {
    switch (propName) {
      case 'avatar': {
        const avatar: Avatar[] = ['fixed', 'random', 'unspecified']
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
  const handleClick = propName => checked => {
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

  return (
    <div className="advanced-search">
      <AdvancedSearchProp
        checked={props.checked.villageName}
        handleClick={handleClick('villageName')}
        label="Village Name"
        name="villageName"
        validity={props.validity.villageName}
      />
      <TextInput
        className="advanced-search--input"
        handleChange={handleChange('villageName')}
        max={30}
        min={5}
        placeholder="5-30 chars"
      />

      <AdvancedSearchProp
        checked={props.checked.hostName}
        handleClick={handleClick('hostName')}
        label="Host Name"
        name="hostName"
        validity={props.validity.hostName}
      />
      <TextInput
        className="advanced-search--input"
        handleChange={handleChange('hostName')}
        max={15}
        min={5}
        placeholder="5-15 chars"
      />

      <AdvancedSearchProp
        checked={props.checked.minimum}
        handleClick={handleClick('minimum')}
        label="Minimum"
        name="minimum"
        validity={props.validity.minimum}
      />
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('minimum')}
        name="minimum"
        to={15}
      />

      <AdvancedSearchProp
        checked={props.checked.maximum}
        handleClick={handleClick('maximum')}
        label="Maximum"
        name="maximum"
        validity={props.validity.maximum}
      />
      <NumberSelect
        ascendingOrder={false}
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('maximum')}
        name="maximum"
        to={15}
      />

      <AdvancedSearchProp
        checked={props.checked.avatar}
        handleClick={handleClick('avatar')}
        label="Avatar"
        name="avatar"
        validity={props.validity.avatar}
      />
      <AvatarSelect
        handleChange={handleChange('avatar')}
      />

      <AdvancedSearchProp
        checked={props.checked.comment}
        handleClick={handleClick('comment')}
        label="Comment"
        name="comment"
        validity={props.validity.comment}
      />
      <TextareaInput
        className="advanced-search--input"
        handleChange={handleChange('comment')}
        max={100}
        min={0}
        placeholder="0-100 chars"
        rows={3}
      />
    </div>
  )
}
