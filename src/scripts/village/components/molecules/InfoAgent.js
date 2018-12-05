// @flow
import React, {Fragment} from 'react'
import AgentIcon from '../atoms/AgentIcon'

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
    <Fragment>
      <AgentIcon
        class="info--agent"
        image={props.image}
        name={props.name}
      />
    </Fragment>
  )
}
