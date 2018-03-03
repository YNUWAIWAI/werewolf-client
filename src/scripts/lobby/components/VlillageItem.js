import Member from './Member'
import React from 'react'

export default function VillageItem(props) {
  return (
    <li className="village--item" onClick={props.handleClick}>
      <div className="village--item--village-name--prop">
        {'Village Name'}
      </div>
      <div className="village--item--village-name--val">
        {props.name}
      </div>
      <div className="village--item--host-name--prop">
        {'Host Name'}
      </div>
      <div className="village--item--host-name--val">
        {props.hostPlayer.name}
      </div>
      <div className="village--item--setup--prop">
        {'Setup'}
      </div>
      <div className="village--item--setup--val1">
        {props.isPlayer ? `${props.playerSetting.current} / ${props.playerSetting.number} players` : `${props.playerSetting.number} players`}
      </div>
      <div className="village--item--setup--val2">
        {`${props.avatar} Avatar`}
      </div>
      <Member human={props.playerSetting.human} robot={props.playerSetting.robot} role={props.roleSetting} />
      <div className="village--item--comment--prop">
        {'Village Comment'}
      </div>
      <div className="village--item--comment--val">
        {props.comment}
      </div>

    </li>
  )
}
