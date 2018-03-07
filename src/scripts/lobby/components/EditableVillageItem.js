import Cast from '../constants/Cast'
import NumberSelect from './NumberSelect'
import React from 'react'
import SelectableMember from './SelectableMember'

export default function EditableVillageItem(props) {
  return (
    <li className="village--item">
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
        role={Cast[props.numberOfPlayers]}
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
    </li>
  )
}
