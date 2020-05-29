import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TeamIcon} from '../atoms/TeamIcon'
import {village} from '../../types'

interface Props {
  readonly myTeam: village.Team | ''
  readonly winnerTeam: village.Team
}

const getId = (myTeam: village.Team | '', winnerTeam: village.Team) => {
  if (myTeam === '') {
    return 'Result.summary.description(audience)'
  } else if (myTeam === winnerTeam) {
    return 'Result.summary.description(player, win)'
  }

  return 'Result.summary.description(player, lose)'
}

export const ResultCellSummary: React.FC<Props> = props => (
  <div
    className="vi--result--cell--summary"
  >
    <FormattedMessage
      id={getId(props.myTeam, props.winnerTeam)}
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
    />
  </div>
)
ResultCellSummary.displayName = 'ResultCellSummary'
