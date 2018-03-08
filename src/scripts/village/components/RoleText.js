// @flow
import React from 'react'

type Props = {
  role: string
}

export default function RoleText(props: Props) {
  return (
    <div className="role--text">
      {'あなたは'}
      <span>
        {props.role}
      </span>
      {'です'}
    </div>
  )
}
