// @flow
import AgentIcon from '../atoms/AgentIcon'
import React from 'react'

export type StateProps = {
  +image: string,
  +name: string
}
type OwnProps = {}

type Props =
 & StateProps
 & OwnProps

export default function InfoAgent(props: Props) {
  return (
    <AgentIcon
      class="info--agent"
      image={props.image}
      name={props.name}
    />
  )
}
