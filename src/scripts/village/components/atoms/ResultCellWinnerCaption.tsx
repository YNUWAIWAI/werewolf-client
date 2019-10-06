import * as React from 'react'
import * as village from '../../types'
import {FormattedMessage} from 'react-intl'
import TeamIcon from './TeamIcon'

interface Props {
  readonly team: village.Team
}

export default function ResultCellWinnerCaption(props: Props) {
  return (
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
    >
      {
        (... text) => (
          <div
            className="vi--result--cell--caption"
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
