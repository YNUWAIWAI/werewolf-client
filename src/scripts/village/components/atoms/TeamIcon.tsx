import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TeamVillager} from './svg/TeamVillager'
import {TeamWerehamster} from './svg/TeamWerehamster'
import {TeamWerewolf} from './svg/TeamWerewolf'
import {village} from '../../types'

export interface Props {
  readonly additionalClass?: string
  readonly class: string
  readonly team: village.Team | ''
}

export const TeamIcon: React.FC<Props> = props => {
  switch (props.team) {
    case village.Team.villager:
      return (
        <div
          className={`${props.class} ${props.additionalClass || ''}`}
        >
          <TeamVillager
            className={`${props.class}--image`}
          />
          <span className={`${props.class}--name`}>
            <FormattedMessage
              id="TeamIcon.villager"
            />
          </span>
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
          <span className={`${props.class}--name`}>
            <FormattedMessage
              id="TeamIcon.werehamster"
            />
          </span>
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
          <span className={`${props.class}--name`}>
            <FormattedMessage
              id="TeamIcon.werewolf"
            />
          </span>
        </div>
      )
    default:
      return (
        <div
          className={`${props.class} ${props.additionalClass || ''}`}
        >
          <img
            className={`${props.class}--image`}
            src="https://werewolf.world/image/0.3/character_icons/50x50/anonymous_50x50.png"
          />
        </div>
      )
  }
}
TeamIcon.displayName = 'TeamIcon'
