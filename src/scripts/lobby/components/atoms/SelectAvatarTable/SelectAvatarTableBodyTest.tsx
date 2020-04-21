import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly test: lobby.TestStatus
}

export default function SelectAvatarTableBodyTest(props: Props) {
  return (
    <div
      className={`lo--select-avatar--table--body--item test ${props.additionalClassName.join(' ')}`}
      onClick={props.handleSelect}
    >
      <FormattedMessage
        id={`SelectAvatarTableBodyTest.test(${props.test})`}
      />
    </div>
  )
}
