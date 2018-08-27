// @flow
import AdvancedSearchBoxRow from './AdvancedSearchBoxRow'
import type {Avatar} from 'lobby'
import React from 'react'

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
  const handleChange = propName => event => {
    if (event.target.validity && event.target.validity.valid && event.target.value !== '') {
      switch (propName) {
        case 'avatar': {
          const avatar: Avatar[] = ['fixed', 'random', 'unspecified']
          const maybe = avatar.find(v => v === event.target.value)

          if (maybe) {
            props.handleAvatarChange(maybe)
          }
          break
        }
        case 'comment':
        case 'hostName':
        case 'villageName':
          props.handleTextChange(propName)(event.target.value)
          break
        case 'maximum':
        case 'minimum':
          props.handleNumberChange(propName)(Number(event.target.value))
          break
        default:
          throw Error(`Unknown: ${propName}`)
      }
      props.handleCheckboxChange(propName)(true)
      props.handleValidityChange(propName)(true)
    } else {
      props.handleCheckboxChange(propName)(false)
      props.handleValidityChange(propName)(false)
    }
  }
  const handleClick = propName => event => {
    props.handleCheckboxChange(propName)(!event.target.checked)
  }

  return (
    <div className="advanced-search">
      <AdvancedSearchBoxRow
        checked={props.checked.villageName}
        handleChange={handleChange('villageName')}
        handleClick={handleClick('villageName')}
        id="villageName"
        max={30}
        min={5}
        name="Village Name"
        placeholder="5-30 chars"
        type="text"
        validity={props.validity.villageName}
      />
      <AdvancedSearchBoxRow
        checked={props.checked.hostName}
        handleChange={handleChange('hostName')}
        handleClick={handleClick('hostName')}
        id="hostName"
        max={15}
        min={5}
        name="Host Name"
        placeholder="5-15 chars"
        type="text"
        validity={props.validity.hostName}
      />
      <AdvancedSearchBoxRow
        checked={props.checked.minimum}
        handleChange={handleChange('minimum')}
        handleClick={handleClick('minimum')}
        id="minimum"
        max={15}
        min={4}
        name="Minimum"
        placeholder="4-15"
        type="number"
        validity={props.validity.minimum}
      />
      <AdvancedSearchBoxRow
        checked={props.checked.maximum}
        handleChange={handleChange('maximum')}
        handleClick={handleClick('maximum')}
        id="maximum"
        max={15}
        min={4}
        name="Maximum"
        placeholder="4-15"
        type="number"
        validity={props.validity.maximum}
      />
      <AdvancedSearchBoxRow
        checked={props.checked.avatar}
        handleChange={handleChange('avatar')}
        handleClick={handleClick('avatar')}
        id="avatar"
        name="Avatar"
        type="select"
        validity={props.validity.avatar}
      />
      <AdvancedSearchBoxRow
        checked={props.checked.comment}
        handleChange={handleChange('comment')}
        handleClick={handleClick('comment')}
        id="comment"
        max={100}
        min={0}
        name="Comment"
        placeholder="0-100 chars"
        type="textarea"
        validity={props.validity.comment}
      />
    </div>
  )
}
