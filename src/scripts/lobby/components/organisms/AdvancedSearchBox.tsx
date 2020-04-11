import * as React from 'react'
import AdvancedSearchCellAvatar from '../molecules/AdvancedSearch/AdvancedSearchCellAvatar'
import AdvancedSearchCellComment from '../molecules/AdvancedSearch/AdvancedSearchCellComment'
import AdvancedSearchCellHostName from '../molecules/AdvancedSearch/AdvancedSearchCellHostName'
import AdvancedSearchCellMaximum from '../molecules/AdvancedSearch/AdvancedSearchCellMaximum'
import AdvancedSearchCellMinimum from '../molecules/AdvancedSearch/AdvancedSearchCellMinimum'
import AdvancedSearchCellVillageName from '../molecules/AdvancedSearch/AdvancedSearchCellVillageName'
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
  readonly handleAvatarChange: (valid: boolean) => (avatar: lobby.Avatar) => void
  readonly handleCheckboxChange: (propName: PropName) => (value: boolean) => void
  readonly handleNumberChange: (propName: NumberPropName) => (valid: boolean) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (valid: boolean) => (value: string) => void
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
  readonly navigatable: boolean
}

export default function AdvancedSearchBox(props: Props) {
  return (
    <div className="lo--advanced-search">
      <AdvancedSearchCellVillageName
        checked={props.checked.villageName}
        handleCheckboxChange={props.handleCheckboxChange('villageName')}
        handleValueChange={props.handleTextChange('villageName')}
        navigatable={props.navigatable}
        valid={props.validity.villageName}
      />
      <AdvancedSearchCellHostName
        checked={props.checked.hostName}
        handleCheckboxChange={props.handleCheckboxChange('hostName')}
        handleValueChange={props.handleTextChange('hostName')}
        navigatable={props.navigatable}
        valid={props.validity.hostName}
      />
      <AdvancedSearchCellMinimum
        checked={props.checked.minimum}
        handleCheckboxChange={props.handleCheckboxChange('minimum')}
        handleValueChange={props.handleNumberChange('minimum')}
        navigatable={props.navigatable}
        valid={props.validity.minimum}
      />
      <AdvancedSearchCellMaximum
        checked={props.checked.maximum}
        handleCheckboxChange={props.handleCheckboxChange('maximum')}
        handleValueChange={props.handleNumberChange('maximum')}
        navigatable={props.navigatable}
        valid={props.validity.maximum}
      />
      <AdvancedSearchCellAvatar
        checked={props.checked.avatar}
        handleCheckboxChange={props.handleCheckboxChange('avatar')}
        handleValueChange={props.handleAvatarChange}
        navigatable={props.navigatable}
        valid={props.validity.avatar}
      />
      <AdvancedSearchCellComment
        checked={props.checked.comment}
        handleCheckboxChange={props.handleCheckboxChange('comment')}
        handleValueChange={props.handleTextChange('comment')}
        navigatable={props.navigatable}
        valid={props.validity.comment}
      />
    </div>
  )
}
