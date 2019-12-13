import * as React from 'react'
import AutomationSelect from '../atoms/AutomationSelect'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import TextInput from '../atoms/TextInput'
import {lobby} from '../../types'

interface Props {
  command: MenuItem[]
}

export default function CreateNewRobotAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="CreateNewAvatar.header"
      >
        {
          text => (
            <div
              className="lo--select-avatar--header"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div
        className="lo--create-new-avatar--body"
      >
        <FormattedMessage
          id="CreateNewAvatar.label"
        >
          {
            text => (
              <label
                className="lo--create-new-avatar--label"
                htmlFor="newAvatarName"
              >
                {text}
              </label>
            )
          }
        </FormattedMessage>
        <TextInput
          className="lo--create-new-avatar--input"
          handleChange={() => () => {}}
          id="newAvatarName"
          initialValue=""
          max={15}
          min={5}
          placeholder=""
          required
        />
        <AutomationSelect
          className="lo--create-new-avatar--select"
          defaultValue={lobby.Automation.full}
          handleChange={() => () => {}}
        />
        <Menu
          className="lo--create-new-avatar--command"
          itemClassName="lo--create-new-avatar--command--item"
          items={props.command}
        />
      </div>
    </>
  )
}