// @flow
import NumberSelect from './NumberSelect'
import React from 'react'
import SelectableMember from './SelectableMember'
import {getCastFromNumberOfPlayers} from '../constants/Cast'

type Props = {
  comment: string,
  handleChange: string => void => void,
  hostName: string,
  numberOfHumans: number,
  numberOfPlayers: number,
  numberOfRobots: number,
  villageName: string
}

export default function EditableVillageItem(props: Props) {
  return (
    <div className="village--item">
      <div className="village--item--village-name--prop">
        {'Village Name'}
      </div>
      <input
        className="village--item--village-name--val"
        defaultValue={props.villageName}
        onChange={props.handleChange('villageName')}
        type="text"
      />
      <div className="village--item--host-name--prop">
        {'Host Name'}
      </div>
      <input
        className="village--item--host-name--val"
        defaultValue={props.hostName}
        onChange={props.handleChange('hostName')}
        type="text"
      />
      <div className="village--item--setup--prop">
        {'Setup'}
      </div>
      <div className="village--item--setup--val1">
        <NumberSelect
          class="village--item--setup--val1--select"
          from={5}
          handleChange={props.handleChange('numberOfPlayers')}
          to={15}
          value={props.numberOfPlayers}
        />
        {'players'}
      </div>
      <div className="village--item--setup--val2">
        <select
          className="village--item--setup--val2--select"
          name="avatar"
          onChange={props.handleChange('avatar')}
        >
          <option value="fixed">
            {'Fixed Avatar'}
          </option>
          <option value="random">
            {'Random Avatar'}
          </option>
        </select>
      </div>
      <SelectableMember
        handleChange={props.handleChange}
        numberOfHumans={props.numberOfHumans}
        numberOfPlayers={props.numberOfPlayers}
        numberOfRobots={props.numberOfRobots}
        role={getCastFromNumberOfPlayers(props.numberOfPlayers)}
      />
      <div className="village--item--comment--prop">
        {'Village Comment'}
      </div>
      <input
        className="village--item--comment--val"
        defaultValue={props.comment}
        onChange={props.handleChange('comment')}
        type="text"
      />
    </div>
  )
}
