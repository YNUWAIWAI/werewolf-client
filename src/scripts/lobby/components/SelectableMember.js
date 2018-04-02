// @flow
import MemberRole from './MemberRole'
import NumberSelect from './NumberSelect'
import {ORDERED_ROLE_LIST} from '../constants/Role'
import React from 'react'

type Props = {
  +handleMemberChange: Member => void,
  +handleNumberChange: string => number => void,
  +numberOfHumans: number,
  +numberOfPlayers: number,
  +numberOfRobots: number,
  +role: {
    +A: RoleSetting,
    +B: RoleSetting,
    +C: RoleSetting
  }
}

const getMember = role =>
  ORDERED_ROLE_LIST
    .map(item =>
      <MemberRole
        class="village--item--selectable-member--role--item"
        id={item.id}
        image={item.image}
        key={item.id}
        name={item.name.ja}
        numberOfAgents={role[item.id]}
      />
    )

export default function SelectableMember(props: Props) {
  const member = {
    A: getMember(props.role.A),
    B: getMember(props.role.B),
    C: getMember(props.role.C)
  }

  return (
    <div className="village--item--selectable-member">
      <div className="village--item--selectable-member--robot">
        {'min'}
        <NumberSelect
          class="village--item--selectable-member--robot--select"
          from={0}
          handleChange={props.handleNumberChange('numberOfRobots')}
          to={props.numberOfPlayers}
          value={props.numberOfRobots}
        />
        {'robots'}
      </div>
      <div className="village--item--selectable-member--human">
        {`max ${props.numberOfHumans} humans`}
      </div>
      <label className="village--item--selectable-member--role" data-opt="A">
        <div className="village--item--selectable-member--role--radio">
          <input
            defaultChecked
            name="member"
            onChange={() => props.handleMemberChange('A')}
            type="radio"
            value="A"
          />
          <span>
            {'A'}
          </span>
        </div>
        {member.A}
      </label>
      <label className="village--item--selectable-member--role" data-opt="B">
        <div className="village--item--selectable-member--role--radio">
          <input
            name="member"
            onChange={() => props.handleMemberChange('B')}
            type="radio"
            value="B"
          />
          <span>
            {'B'}
          </span>
        </div>
        {member.B}
      </label>
      <label className="village--item--selectable-member--role" data-opt="C">
        <div className="village--item--selectable-member--role--radio">
          <input
            name="member"
            onChange={() => props.handleMemberChange('C')}
            type="radio"
            value="C"
          />
          <span>
            {'C'}
          </span>
        </div>
        {member.C}
      </label>
    </div>
  )
}
