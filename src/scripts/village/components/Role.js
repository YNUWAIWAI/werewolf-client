// @flow
import React, {Fragment} from 'react'
import AgentIcon from './AgentIcon'
import RoleText from './RoleText'

export type StateProps = {
  +image: string,
  +role: string,
  +name: string
}
type OwnProps = {}

type Props =
 & StateProps
 & OwnProps

export default function Role(props: Props) {
  return (
    <Fragment>
      <AgentIcon class="info--role--icon" image={props.image} name={props.name} />
      <RoleText role={props.role} />
    </Fragment>
  )
}
