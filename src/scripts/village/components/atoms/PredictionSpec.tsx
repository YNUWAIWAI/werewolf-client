import * as React from 'react'

interface Props {
  style: React.CSSProperties
  role: village.RoleId
  visible: boolean
}

export default function PredictionSpec(props: Props) {
  if (!props.visible) {
    return null
  }

  return (
    <div
      className="vi--prediction"
      style={props.style}
    >
      <div
        className="vi--prediction--spec"
      >
        {`${props.role}'s spec`}
      </div>
    </div>
  )
}
