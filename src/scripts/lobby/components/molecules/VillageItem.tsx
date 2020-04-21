import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Member from './Member'
import {lobby} from '../../types'

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
      <div className="lo--village--item--prop village-name">
        <FormattedMessage
          id="VillageItem.label(villageName)"
        />
      </div>
      <div className="lo--village--item--val village-name">
        {props.name}
      </div>
      <div className="lo--village--item--val id-for-searching">
        {Number.isInteger(props.idForSearching) ? `#${props.idForSearching}` : '####'}
      </div>
      <div className="lo--village--item--prop host-name">
        <FormattedMessage
          id="VillageItem.label(hostName)"
        />
      </div>
      {
        props.avatar === 'fixed' ?
          <div className="lo--village--item--val host-name">
            {props.hostPlayer.name}
          </div> :
          <div className="lo--village--item--val host-name">
            <FormattedMessage
              id="VillageItem.hostName.anonymous"
            />
          </div>
      }
      <div className="lo--village--item--prop setup">
        <FormattedMessage
          id="VillageItem.label(setup)"
        />
      </div>
      <div className="lo--village--item--val setup1">
        <FormattedMessage
          id={`VillageItem.val(numOfPlayers, ${props.isPlayer ? 'player' : 'audience'})`}
          values={{
            current: props.playerSetting.current,
            number: props.playerSetting.number
          }}
        />
      </div>
      <div className="lo--village--item--val setup2">
        <FormattedMessage
          id={`VillageItem.val(avatar, ${props.avatar})`}
        />
      </div>
      <Member human={props.playerSetting.human} robot={props.playerSetting.robot} role={props.roleSetting} />
      <div className="lo--village--item--prop comment">
        <FormattedMessage
          id="VillageItem.label(comment)"
        />
      </div>
      <div className="lo--village--item--val comment">
        {props.comment}
      </div>
    </div>
  )
}
