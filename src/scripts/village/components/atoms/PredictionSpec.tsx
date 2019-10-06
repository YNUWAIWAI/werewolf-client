import * as React from 'react'
import * as village from '../../types'
import {FormattedMessage} from 'react-intl'

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
      className="vi--prediction spec"
      style={props.style}
    >
      <FormattedMessage
        id={`PredictionSpec(${props.role})`}
      >
        {
          text => (
            <div
              className="vi--prediction--spec"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
