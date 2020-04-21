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
      <div
        className="vi--prediction--spec--body"
      >
        <FormattedMessage
          id={`PredictionSpec(${props.role})`}
        />
      </div>
    </div>
  )
}
