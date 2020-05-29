import * as React from 'react'
import {AdvancedSearchProp} from '../../atoms/AdvancedSearchProp'
import {AvatarSelect} from '../../atoms/Select/AvatarSelect'
import {lobby} from '../../../types'

interface Props {
  readonly checked: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: lobby.Avatar) => void
  readonly navigatable: boolean
  readonly valid: boolean
}

export const AdvancedSearchCellAvatar: React.FC<Props> = props => (
  <>
    <AdvancedSearchProp
      checked={props.checked}
      handleChange={props.handleCheckboxChange}
      name="avatar"
      navigatable={props.navigatable}
      valid={props.valid}
    />
    <AvatarSelect
      className="lo--advanced-search--input"
      defaultValue={lobby.Avatar.random}
      handleChange={props.handleValueChange}
      navigatable={props.navigatable}
      type="advancedSearch"
    />
  </>
)
AdvancedSearchCellAvatar.displayName = 'AdvancedSearchCellAvatar'
