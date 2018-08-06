// @flow
import type {Avatar, Member} from 'lobby'
import AvatarSelect from './AvatarSelect'
import NumberSelect from './NumberSelect'
import React from 'react'
import SelectableMember from './SelectableMember'
import {getCastFromNumberOfPlayers} from '../constants/Cast'

type Props = {
  +comment: string,
  +handleAvatarChange: Avatar => void,
  +handleMemberChange: Member => void,
  +handleNumberChange: string => number => void,
  +handleTextChange: string => string => void,
  +hostName: string,
  +numberOfHumans: number,
  +numberOfPlayers: number,
  +numberOfRobots: number,
  +villageName: string
}

export default function EditableVillageItem(props: Props) {
  return (
    <div className="village--item build">
      <div className="village--item--village-name--prop">
        {'Village Name'}
      </div>
      <input
        className="village--item--village-name--val"
        defaultValue={props.villageName}
        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => props.handleTextChange('villageName')(event.target.value)}
        type="text"
      />
      <div className="village--item--host-name--prop">
        {'Host Name'}
      </div>
      <input
        className="village--item--host-name--val"
        defaultValue={props.hostName}
        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => props.handleTextChange('hostName')(event.target.value)}
        type="text"
      />
      <div className="village--item--setup--prop">
        {'Setup'}
      </div>
      <div className="village--item--setup--val1">
        <NumberSelect
          class="village--item--setup--val1--select"
          from={5}
          handleChange={props.handleNumberChange('numberOfPlayers')}
          to={15}
          value={props.numberOfPlayers}
        />
        {'players'}
      </div>
      <div className="village--item--setup--val2">
        <AvatarSelect handleChange={props.handleAvatarChange} />
      </div>
      <SelectableMember
        handleMemberChange={props.handleMemberChange}
        handleNumberChange={props.handleNumberChange}
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
        onChange={(event: SyntheticInputEvent<HTMLInputElement>) => props.handleTextChange('comment')(event.target.value)}
        type="text"
      />
    </div>
  )
}
