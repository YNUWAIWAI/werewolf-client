// @flow
import React, {Fragment} from 'react'
import type {Team} from 'village'
import TeamIcon from '../atoms/TeamIcon'

export type StateProps = {
  +team: Team | ''
}
type OwnProps = {}

type Props =
 & StateProps
 & OwnProps

export default function InfoAgent(props: Props) {
  return (
    <Fragment>
      <TeamIcon
        class="info--team"
        team={props.team}
      />
    </Fragment>
  )
}
