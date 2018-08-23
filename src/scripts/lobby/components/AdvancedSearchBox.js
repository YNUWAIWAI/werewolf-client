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
  +handleTextChange: ('comment' | 'hostName' | 'villageName') => string => void
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
          props.handleTextChange(propName)(event.target.value)
          break
        case 'hostName':
          props.handleTextChange(propName)(event.target.value)
          break
        case 'maximum':
          break
        case 'minimum':
          break
        case 'villageName':
          props.handleTextChange(propName)(event.target.value)
          break
        default:
          throw Error(`Unknown: ${propName}`)
      }
      props.handleCheckboxChange(propName)(true)
    } else {
      props.handleCheckboxChange(propName)(false)

    }
  }

  return (
    <div className="advanced-search">
      <AdvancedSearchBoxRow
        checked={props.checked.villageName}
        handleChange={handleChange('villageName')}
        id="villageName"
        max={30}
        min={5}
        name="Village Name"
        placeholder="5-30 chars"
        type="text"
      />
      <AdvancedSearchBoxRow
        checked={props.checked.hostName}
        handleChange={handleChange('hostName')}
        id="hostName"
        max={15}
        min={5}
        name="Host Name"
        placeholder="5-15 chars"
        type="text"
      />
      <AdvancedSearchBoxRow
        checked={props.checked.minimum}
        handleChange={handleChange('minimum')}
        id="minimum"
        max={15}
        min={5}
        name="Minimum"
        placeholder="4-15"
        type="number"
      />
      <AdvancedSearchBoxRow
        checked={props.checked.maximum}
        handleChange={handleChange('maximum')}
        id="maximum"
        max={15}
        min={5}
        name="Maximum"
        placeholder="4-15"
        type="number"
      />
      <AdvancedSearchBoxRow
        checked={props.checked.avatar}
        handleChange={handleChange('avatar')}
        id="avatar"
        name="Avatar"
        type="select"
      />
      <AdvancedSearchBoxRow
        checked={props.checked.comment}
        handleChange={handleChange('comment')}
        id="comment"
        max={100}
        min={0}
        name="Comment"
        placeholder="0-100 chars"
        type="textarea"
      />
    </div>
  )
}
