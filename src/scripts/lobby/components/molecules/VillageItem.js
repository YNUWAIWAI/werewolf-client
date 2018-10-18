// @flow
import {FormattedMessage} from 'react-intl'
import Member from './Member'
import React from 'react'
import type {Village} from 'lobby'

type Props = {
  +handleClick: void => void,
  +isPlayer: boolean
} & $ReadOnly<Village>

export default function VillageItem(props: Props) {
  return (
    <div className="village--item" onClick={props.handleClick}>
      <FormattedMessage
        id="VillageItem.label(villageName)"
      >
        {
          (text: string) =>
            <div className="village--item--village-name--prop">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--village-name--val">
        {props.name}
      </div>
      <div className="village--item--idForSearching">
        {Number.isInteger(props.idForSearching) ? `#${props.idForSearching}` : '####'}
      </div>
      <FormattedMessage
        id="VillageItem.label(hostName)"
      >
        {
          (text: string) =>
            <div className="village--item--host-name--prop">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--host-name--val">
        {props.hostPlayer.name}
      </div>
      <FormattedMessage
        id="VillageItem.label(setup)"
      >
        {
          (text: string) =>
            <div className="village--item--setup--prop">
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id={`VillageItem.val(numOfPlayers, ${props.isPlayer ? 'player' : 'audience'})`}
        values={{
          current: props.playerSetting.current,
          number: props.playerSetting.number
        }}
      >
        {
          (text: string) =>
            <div className="village--item--setup--val1">
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id={`VillageItem.val(avatar, ${props.avatar})`}
      >
        {
          (text: string) =>
            <div className="village--item--setup--val2">
              {text}
            </div>
        }
      </FormattedMessage>
      <Member human={props.playerSetting.human} robot={props.playerSetting.robot} role={props.roleSetting} />
      <FormattedMessage
        id="VillageItem.label(comment)"
      >
        {
          (text: string) =>
            <div className="village--item--comment--prop">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--comment--val">
        {props.comment}
      </div>
    </div>
  )
}
