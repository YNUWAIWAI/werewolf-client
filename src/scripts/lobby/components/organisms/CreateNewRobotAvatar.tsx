import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import TextInput from '../atoms/TextInput'

interface Props {
  command: MenuItem[]
}

export default function CreateNewRobotAvatar(props: Props) {
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
      <Menu
        className="lo--create-new-avatar--command"
        itemClassName="lo--create-new-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
