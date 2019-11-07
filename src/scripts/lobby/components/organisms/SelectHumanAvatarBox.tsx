import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectHumanAvatar'
import {FormattedMessage} from 'react-intl'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
}

export default function SelectHumanAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="SelectHumanAvatarBox.header"
      >
        {
          text => (
            <div>
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <SelectHumanAvatarTable
        avatar={props.avatar}
        handleAvatarNameChange={props.handleAvatarNameChange}
      />
    </>
  )
}
