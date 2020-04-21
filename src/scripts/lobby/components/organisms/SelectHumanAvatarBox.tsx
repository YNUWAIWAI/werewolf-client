import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'

interface Props {
  readonly command: MenuItem[]
}

export default function SelectHumanAvatarBox(props: Props) {
  return (
    <>
      <div
        className="lo--select-avatar--header"
      >
        <FormattedMessage
          id="SelectHumanAvatarBox.header"
        />
      </div>
      <SelectHumanAvatarTable />
      <Menu
        className="lo--select-avatar--command human"
        itemClassName="lo--select-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
