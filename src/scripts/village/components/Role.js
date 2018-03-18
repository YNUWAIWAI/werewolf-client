// @flow
import React from 'react'
import RoleIcon from './RoleIcon'
import RoleText from './RoleText'

export type StateProps = {
  +image: string,
  +role: string,
  +name: string
}

type Props =
 & StateProps

export default function Role(props: Props) {
  return (
    <div className="role">
      <RoleIcon class="role--icon" image={props.image} name={props.name} />
      <RoleText role={props.role} />
    </div>
  )
}
