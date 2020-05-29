import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TeamIcon} from './TeamIcon'
import {village} from '../../types'

interface Props {
  readonly team: village.Team
}

export const ResultCellWinnerCaption: React.FC<Props> = props => (
  <div
    className="vi--result--cell--caption"
  >
    <FormattedMessage
      id="Result.summary.winner"
      values={
        {
          winnerTeam:
            <TeamIcon
              class="vi--result--cell--caption--team"
              key="winnerTeam"
              team={props.team}
            />
        }
      }
    />
  </div>
)
ResultCellWinnerCaption.displayName = 'ResultCellWinnerCaption'
