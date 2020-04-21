import * as React from 'react'
import AutomationSelect from '../Select/AutomationSelect'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly automation: lobby.Automation
  readonly handleChange: (valid: boolean) => (value: lobby.Automation) => void
  readonly navigatable: boolean
}

export default function CreateNewAvatarAutomation(props: Props) {
  return (
    <>
      <label
        className="lo--create-new-avatar--label automation"
        htmlFor="newAvatarName"
      >
        <FormattedMessage
          id="CreateNewAvatar.label(automation)"
        />
      </label>
      <AutomationSelect
        className="lo--create-new-avatar--input"
        defaultValue={props.automation}
        handleChange={props.handleChange}
        navigatable={props.navigatable}
      />
    </>
  )
}
