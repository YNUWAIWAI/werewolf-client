// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

type Props = {
  +role: string
}

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

export default function RoleText(props: Props) {
  const role =
    <span key={props.role}>
      {props.role}
    </span>

  return (
    <FormattedMessage
      id="RoleText"
      values={{
        role
      }}
    >
      {
        (... text): React$Node =>
          <div className="info--role--text">
            {text}
          </div>
      }
    </FormattedMessage>
  )
}
