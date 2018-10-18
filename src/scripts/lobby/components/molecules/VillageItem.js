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
            <div className="village--item--prop village-name">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--val village-name">
        {props.name}
      </div>
      <div className="village--item--val id-for-searching">
        {Number.isInteger(props.idForSearching) ? `#${props.idForSearching}` : '####'}
      </div>
      <FormattedMessage
        id="VillageItem.label(hostName)"
      >
        {
          (text: string) =>
            <div className="village--item--prop host-name">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--val host-name">
        {props.hostPlayer.name}
      </div>
      <FormattedMessage
        id="VillageItem.label(setup)"
      >
        {
          (text: string) =>
            <div className="village--item--prop setup">
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
            <div className="village--item--val setup1">
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id={`VillageItem.val(avatar, ${props.avatar})`}
      >
        {
          (text: string) =>
            <div className="village--item--val setup2">
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
            <div className="village--item--prop comment">
              {text}
            </div>
        }
      </FormattedMessage>
      <div className="village--item--val comment">
        {props.comment}
      </div>
    </div>
  )
}
