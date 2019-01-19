import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TeamVillager from './svg/TeamVillager'
import TeamWerehamster from './svg/TeamWerehamster'
import TeamWerewolf from './svg/TeamWerewolf'

export interface Props {
  readonly additionalClass?: string
  readonly class: string
  readonly team: village.Team | ''
}

export default function TeamIcon(props: Props) {
  switch (props.team) {
    case village.Team.villager:
      return (
        <div
          className={`${props.class} ${props.additionalClass || ''}`}
        >
          <TeamVillager
            className={`${props.class}--image`}
          />
          <FormattedMessage
            id="TeamIcon.villager"
          >
            {
              text =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    case village.Team.werehamster:
      return (
        <div
          className={`${props.class} ${props.additionalClass || ''}`}
        >
          <TeamWerehamster
            className={`${props.class}--image`}
          />
          <FormattedMessage
            id="TeamIcon.werehamster"
          >
            {
              text =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    case village.Team.werewolf:
      return (
        <div
          className={`${props.class} ${props.additionalClass || ''}`}
        >
          <TeamWerewolf
            className={`${props.class}--image`}
          />
          <FormattedMessage
            id="TeamIcon.werewolf"
          >
            {
              text =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    default:
      return null
  }
}