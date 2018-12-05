// @flow
import React, {Fragment} from 'react'
import RoleIcon from '../atoms/RoleIcon'

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
      <RoleIcon
        class="info--role"
        image={props.image}
        name={props.name}
      />
    </Fragment>
  )
}
