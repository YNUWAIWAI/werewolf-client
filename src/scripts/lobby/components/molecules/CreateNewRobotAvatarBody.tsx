import * as React from 'react'
import AutomationSelect from '../atoms/Select/AutomationSelect'
import {FormattedMessage} from 'react-intl'
import TextInput from '../atoms/TextInput'
import {lobby} from '../../types'

interface Props {}

export default function CreateNewRobotAvatarBody(props: Props) {
  return (
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
    </div>
  )
}
