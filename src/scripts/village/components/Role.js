// @flow
import React from 'react'
import RoleIcon from './RoleIcon'
import RoleText from './RoleText'

type Props = {
  agent: string,
  image: string,
  role: string
}

export default function Role(props: Props) {
  return (
    <div className="role" id="role">
      <RoleIcon agent={props.agent} class="role--icon" image={props.image} />
      <RoleText role={props.role} />
    </div>
  )
}
