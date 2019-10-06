import * as React from 'react'
import * as lobby from '../../types'
import {FormattedMessage} from 'react-intl'
import Member from './Member'

interface Props extends Readonly<lobby.Village> {
  readonly handleClick?: () => void
  readonly isPlayer: boolean
}

export default function VillageItem(props: Props) {
  return (
    <div
      className={`lo--village--item ${typeof props.handleClick === 'function' ? 'clickable' : ''}`}
      onClick={props.handleClick}
    >
      <FormattedMessage
        id="VillageItem.label(villageName)"
      >
        {
          text => (
            <div className="lo--village--item--prop village-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div className="lo--village--item--val village-name">
        {props.name}
      </div>
      <div className="lo--village--item--val id-for-searching">
        {Number.isInteger(props.idForSearching) ? `#${props.idForSearching}` : '####'}
      </div>
      <FormattedMessage
        id="VillageItem.label(hostName)"
      >
        {
          text => (
            <div className="lo--village--item--prop host-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      {
        props.avatar === 'fixed' ?
          <div className="lo--village--item--val host-name">
            {props.hostPlayer.name}
          </div> :
          <FormattedMessage
            id="VillageItem.hostName.anonymous"
          >
            {
              text => (
                <div className="lo--village--item--val host-name">
                  {text}
                </div>
              )
            }
          </FormattedMessage>
      }
      <FormattedMessage
        id="VillageItem.label(setup)"
      >
        {
          text => (
            <div className="lo--village--item--prop setup">
              {text}
            </div>
          )
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
          text => (
            <div className="lo--village--item--val setup1">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id={`VillageItem.val(avatar, ${props.avatar})`}
      >
        {
          text => (
            <div className="lo--village--item--val setup2">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <Member human={props.playerSetting.human} robot={props.playerSetting.robot} role={props.roleSetting} />
      <FormattedMessage
        id="VillageItem.label(comment)"
      >
        {
          text => (
            <div className="lo--village--item--prop comment">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div className="lo--village--item--val comment">
        {props.comment}
      </div>
    </div>
  )
}
