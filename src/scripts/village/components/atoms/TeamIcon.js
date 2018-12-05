// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'
import type {Team} from 'village'
import TeamVillager from './svg/TeamVillager'
import TeamWerehamster from './svg/TeamWerehamster'
import TeamWerewolf from './svg/TeamWerewolf'

type Props = {
  +additionalClass?: string,
  +class: string,
  +team: Team | ''
}

export default function TeamIcon(props: Props) {
  switch (props.team) {
    case 'villager':
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
              (text: string) =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    case 'werehamster':
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
              (text: string) =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    case 'werewolf':
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
              (text: string) =>
                <span className={`${props.class}--name`}>
                  {text}
                </span>
            }
          </FormattedMessage>
        </div>
      )
    default:
      return ''
  }
}
