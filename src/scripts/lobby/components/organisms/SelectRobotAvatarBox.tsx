import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectRobotAvatarTable from '../organisms/SelectRobotAvatarTable'

interface Props {
  readonly command: MenuItem[]
}

export default function SelectRobotAvatarBox(props: Props) {
  return (
    <>
      <div
        className="lo--select-avatar--header"
      >
        <FormattedMessage
          id="SelectRobotAvatarBox.header"
        />
      </div>
      <SelectRobotAvatarTable />
      <Menu
        className="lo--select-avatar--command"
        itemClassName="lo--select-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
