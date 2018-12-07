// @flow
import type {AgentStatus, Team} from 'village'
import {FormattedMessage} from 'react-intl'
import React from 'react'
import TeamIcon from '../atoms/TeamIcon'

type Props =
  | {
    +image: string,
    +status: AgentStatus,
    +type: 'avatarImage' | 'image'
  }
  | {
    +image: string,
    +name: string,
    +status: AgentStatus,
    +type: 'roleImage'
  }
  | {
    +id: string,
    +myTeam: ?Team,
    +type: 'summary',
    +winnerTeam: Team
  }
  | {
    +id: string,
    +loserTeam?: Set<Team>,
    +type: 'caption',
    +winnerTeam?: Team
  }
  | {
    +status: AgentStatus,
    +text: string,
    +type: 'avatarName' | 'name'
  }
  | {
    +status: AgentStatus,
    +type: 'status'
  }

export default function ResultCell(props: Props) {
  switch (props.type) {
    case 'avatarImage':
    case 'image':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          <img
            className={`result--cell--${props.type}--image`}
            src={props.image}
          />
        </div>
      )
    case 'roleImage':
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
    case 'caption': {
      // '' is dummy element
      // ex) ['werewolf', 'villager'], ['werewolf', ''], ['', '']
      const loserTeam = props.loserTeam ? [... props.loserTeam, ''] : ['', '']

      return (
        <FormattedMessage
          id={props.id}
          values={
            {
              loserTeam0:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  team={loserTeam[0]}
                />,
              loserTeam1:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  team={loserTeam[1]}
                />,
              winnerTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  team={props.winnerTeam || ''}
                />
            }
          }
        >
          {
            (... text: string[]) =>
              <div
                className={`result--cell result--cell--${props.type}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    }
    case 'summary':
      return (
        <FormattedMessage
          id={props.id}
          values={
            {
              myTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  team={props.myTeam || ''}
                />,
              winnerTeam:
                <TeamIcon
                  class={`result--cell--${props.type}--team`}
                  team={props.winnerTeam}
                />
            }
          }
        >
          {
            (... text: string[]) =>
              <div
                className={`result--cell result--cell--${props.type}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    case 'avatarName':
    case 'name':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          {props.text}
        </div>
      )
    case 'status':
      return (
        <FormattedMessage
          id={`Result.status(${props.status})`}
        >
          {
            (text: string) =>
              <div
                className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    default:
      throw Error(`props.type: ${props.type} is unexpectted value.`)
  }
}
