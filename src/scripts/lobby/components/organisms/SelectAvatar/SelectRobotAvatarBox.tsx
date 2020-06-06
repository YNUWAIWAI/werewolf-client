import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {MenuContainer} from '../../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../Menu'
import {SelectRobotAvatarTable} from './SelectRobotAvatarTable'

interface Props {
  readonly command: MenuItem[]
}

export const SelectRobotAvatarBox: React.FC<Props> = props => (
  <>
    <div
      className="lo--select-avatar--header"
    >
      <FormattedMessage
        id="SelectRobotAvatarBox.header"
      />
    </div>
    <SelectRobotAvatarTable />
    <MenuContainer
      className="lo--select-avatar--command"
      itemClassName="lo--select-avatar--command--item"
      items={props.command}
    />
  </>
)
SelectRobotAvatarBox.displayName = 'SelectRobotAvatarBox'
