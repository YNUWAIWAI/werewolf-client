import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TeamIcon from '../atoms/TeamIcon'

interface Props {
  readonly id: string
  readonly myTeam: village.Team | ''
  readonly winnerTeam: village.Team
}

export default function ResultCellSummary(props: Props) {
  return (
    <FormattedMessage
      id={props.id}
      values={
        {
          myTeam:
            <TeamIcon
              class="vi--result--cell--summary--team"
              key="myTeam"
              team={props.myTeam || ''}
            />,
          winnerTeam:
            <TeamIcon
              class="vi--result--cell--summary--team"
              key="winnerTeam"
              team={props.winnerTeam}
            />
        }
      }
    >
      {
        (... text) => (
          <div
            className="vi--result--cell--summary"
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
