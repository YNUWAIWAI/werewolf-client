import * as React from 'react'

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
