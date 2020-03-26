import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {village} from '../../types'

interface Props {
  role: village.RoleId
  style: React.CSSProperties
  visible: boolean
}

export default function PredictionSpec(props: Props) {
  if (!props.visible) {
    return null
  }

  return (
    <div
      className="vi--prediction--spec"
      style={props.style}
    >
      <FormattedMessage
        id={`PredictionSpec(${props.role})`}
      >
        {
          text => (
            <div
              className="vi--prediction--spec--body"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
