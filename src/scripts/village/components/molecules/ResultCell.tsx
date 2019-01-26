import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TeamIcon from '../atoms/TeamIcon'

export const enum ResultCellType {
  avatarImage = 'avatarImage',
  avatarName = 'avatarName',
  caption = 'caption',
  image = 'image',
  name = 'name',
  roleImage = 'roleImage',
  status = 'status',
  summary = 'summary'
}

type Props =
  | {
    readonly image: string
    readonly status: village.AgentStatus
    readonly type: ResultCellType.avatarImage | ResultCellType.image
  }
  | {
    readonly image: string
    readonly name: string
    readonly status: village.AgentStatus
    readonly type: ResultCellType.roleImage
  }
  | {
    readonly id: string
    readonly myTeam: village.Team | ''
    readonly type: ResultCellType.summary
    readonly winnerTeam: village.Team
  }
  | {
    readonly id: string
    readonly loserTeam?: Set<village.Team>
    readonly type: ResultCellType.caption
    readonly winnerTeam?: village.Team
  }
  | {
    readonly status: village.AgentStatus
    readonly text: string
    readonly type: ResultCellType.avatarName | ResultCellType.name
  }
  | {
    readonly status: village.AgentStatus
    readonly type: ResultCellType.status
  }

export default function ResultCell(props: Props) {
  switch (props.type) {
    case ResultCellType.avatarImage:
    case ResultCellType.image:
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          <img
            className={`result--cell--${props.type}--image`}
            src={props.image}
          />
        </div>
      )
    case ResultCellType.roleImage:
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          <img
            className={`result--cell--${props.type}--image`}
            src={props.image}
          />
          <span className={`result--cell--${props.type}--name`}>
            {props.name}
          </span>
        </div>
      )
    case ResultCellType.caption: {
      // '' is dummy element
      // ex) ['werewolf', 'villager'], ['werewolf', ''], ['', '']
      const loserTeam: (village.Team | '')[] = props.loserTeam ? [... props.loserTeam, ''] : ['', '']

      return (
        <FormattedMessage
          id={props.id}
          key="caption"
          values={
            {
              loserTeam0:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  key="loserTeam0"
                  team={loserTeam[0]}
                />,
              loserTeam1:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  key="loserTeam1"
                  team={loserTeam[1]}
                />,
              winnerTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  key="winnerTeam"
                  team={props.winnerTeam || ''}
                />
            }
          }
        >
          {
            (... text) =>
              <div
                className={`result--cell result--cell--${props.type}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    }
    case ResultCellType.summary:
      return (
        <FormattedMessage
          id={props.id}
          key="summary"
          values={
            {
              myTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  key="myTeam"
                  team={props.myTeam || ''}
                />,
              winnerTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  key="winnerTeam"
                  team={props.winnerTeam}
                />
            }
          }
        >
          {
            (... text) =>
              <div
                className={`result--cell result--cell--${props.type}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    case ResultCellType.avatarName:
    case ResultCellType.name:
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          {props.text}
        </div>
      )
    case ResultCellType.status:
      return (
        <FormattedMessage
          id={`Result.status(${props.status})`}
          key="status"
        >
          {
            text =>
              <div
                className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    default:
      throw Error('props.type: unexpectted value.')
  }
}
