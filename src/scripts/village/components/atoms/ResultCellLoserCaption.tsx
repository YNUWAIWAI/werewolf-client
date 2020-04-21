import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TeamIcon from './TeamIcon'
import {village} from '../../types'

interface Props {
  readonly team: Set<village.Team>
}

export default function ResultCellLoserCaption(props: Props) {
  // '' is dummy element
  // ex) ['werewolf', 'villager'], ['werewolf', ''], ['', '']
  const loserTeam: (village.Team | '')[] = [... props.team, '']

  return (
    <div
      className="vi--result--cell--caption"
    >
      <FormattedMessage
        id={`Result.summary.loser(${props.team.size})`}
        values={
          {
            loserTeam0:
              <TeamIcon
                class="vi--result--cell--caption--team"
                key="loserTeam0"
                team={loserTeam[0]}
              />,
            loserTeam1:
              <TeamIcon
                class="vi--result--cell--caption--team"
                key="loserTeam1"
                team={loserTeam[1]}
              />
          }
        }
      />
    </div>
  )
}
