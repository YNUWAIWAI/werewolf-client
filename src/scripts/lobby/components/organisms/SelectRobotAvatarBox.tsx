import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import SelectRobotAvatarTable from '../organisms/SelectRobotAvatarTable'
import {lobby} from '../../types'

interface Props {}

export default function SelectRobotAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="SelectRobotAvatarBox.header"
      >
        {
          text => (
            <div>
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <SelectRobotAvatarTable />
    </>
  )
}
