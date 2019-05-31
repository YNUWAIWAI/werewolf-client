import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TeamIcon from './TeamIcon'

interface Props {
  readonly id: string
  readonly loserTeam?: Set<village.Team>
  readonly winnerTeam?: village.Team
}

export default function ResultCellCaption(props: Props) {
  // '' is dummy element
  // ex) ['werewolf', 'villager'], ['werewolf', ''], ['', '']
  const loserTeam: (village.Team | '')[] = props.loserTeam ? [... props.loserTeam, ''] : ['', '']

  return (
    <FormattedMessage
      id={props.id}
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
            />,
          winnerTeam:
            <TeamIcon
              class="vi--result--cell--caption--team"
              key="winnerTeam"
              team={props.winnerTeam || ''}
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
