import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly isTestPassed: boolean
}

export default function SelectAvatarTableBodyTest(props: Props) {
  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyTest.test(${props.isTestPassed ? 'passed' : 'not passed'})`}
    >
      {
        text => (
          <div
            className={`lo--select-avatar--table--body--item test ${props.additionalClassName.join(' ')}`}
            onClick={props.handleSelect}
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
