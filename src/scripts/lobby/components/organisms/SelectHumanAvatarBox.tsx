import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'
import {lobby} from '../../types'

interface Props {}

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
      <SelectHumanAvatarTable />
    </>
  )
}
