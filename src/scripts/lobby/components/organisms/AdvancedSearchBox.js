// @flow
import AdvancedSearchProp from '../atoms/AdvancedSearchProp'
import type {Avatar} from 'lobby'
import AvatarSelect from '../atoms/AvatarSelect'
import {FormattedMessage} from 'react-intl'
import NumberSelect from '../atoms/NumberSelect'
import React from 'react'
import TextInput from '../atoms/TextInput'
import TextareaInput from '../atoms/TextareaInput'

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
        validity={props.validity.villageName}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(villageName)"
        values={villageName}
      >
        {
          (text: string) =>
            <TextInput
              className="advanced-search--input"
              handleChange={handleChange('villageName')}
              initialValue=""
              max={villageName.max}
              min={villageName.min}
              placeholder={text}
              required={false}
            />
        }
      </FormattedMessage>
      <AdvancedSearchProp
        checked={props.checked.hostName}
        handleClick={handleClick('hostName')}
        name="hostName"
        validity={props.validity.hostName}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(hostName)"
        values={hostName}
      >
        {
          (text: string) =>
            <TextInput
              className="advanced-search--input"
              handleChange={handleChange('hostName')}
              initialValue=""
              max={hostName.max}
              min={hostName.min}
              placeholder={text}
              required={false}
            />
        }
      </FormattedMessage>
      <AdvancedSearchProp
        checked={props.checked.minimum}
        handleClick={handleClick('minimum')}
        name="minimum"
        validity={props.validity.minimum}
      />
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('minimum')}
        name="minimum"
        suffix=""
        to={15}
      />

      <AdvancedSearchProp
        checked={props.checked.maximum}
        handleClick={handleClick('maximum')}
        name="maximum"
        validity={props.validity.maximum}
      />
      <NumberSelect
        ascendingOrder={false}
        className="advanced-search--input"
        from={4}
        handleChange={handleChange('maximum')}
        name="maximum"
        suffix=""
        to={15}
      />

      <AdvancedSearchProp
        checked={props.checked.avatar}
        handleClick={handleClick('avatar')}
        name="avatar"
        validity={props.validity.avatar}
      />
      <AvatarSelect
        className="advanced-search--input"
        defaultValue="random"
        handleChange={handleChange('avatar')}
        type="advancedSearch"
      />

      <AdvancedSearchProp
        checked={props.checked.comment}
        handleClick={handleClick('comment')}
        name="comment"
        validity={props.validity.comment}
      />
      <FormattedMessage
        id="AdvancedSearch.placeholder(comment)"
        values={comment}
      >
        {
          (text: string) =>
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
        }
      </FormattedMessage>
    </div>
  )
}
