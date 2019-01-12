import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import MemberRole from '../atoms/MemberRole'
import NumberSelect from '../atoms/NumberSelect'
import {ORDERED_ROLE_LIST} from '../../constants/Role'

interface Props {
  readonly handleMemberChange: (valid: boolean) => (value: lobby.Member) => void
  readonly handleNumberChange: (valid: boolean) => (value: number) => void
  readonly numberOfHumans: number
  readonly numberOfPlayers: number
  readonly numberOfRobots: number
  readonly role: {
    readonly A: Readonly<lobby.RoleSetting>
    readonly B: Readonly<lobby.RoleSetting>
    readonly C: Readonly<lobby.RoleSetting>
  }
  readonly validity: {
    readonly numberOfRobots: boolean
  }
}

const getMember = (role: Readonly<lobby.RoleSetting>) =>
  ORDERED_ROLE_LIST
    .map(item =>
      <MemberRole
        className="village--item--member-select--role--item"
        id={item.id}
        image={item.image}
        key={item.id}
        name={item.name.ja}
        numberOfAgents={role[item.id]}
      />
    )

export default function MemberSelect(props: Props) {
  const member = {
    A: getMember(props.role.A),
    B: getMember(props.role.B),
    C: getMember(props.role.C)
  }

  return (
    <div className="village--item--member-select">
      <div className={`village--item--member-select--robot ${props.validity.numberOfRobots ? '' : 'invalid'}`}>
        <FormattedMessage id="MemberSelect.min" />
        <NumberSelect
          ascendingOrder
          className="village--item--member-select--robot--select"
          defaultValue={props.numberOfRobots}
          from={0}
          handleChange={props.handleNumberChange}
          name="numberOfRobots"
          to={props.numberOfPlayers}
          type="robot"
        />
      </div>
      <FormattedMessage
        id="MemberSelect.max"
        values={{
          num: props.numberOfHumans
        }}
      >
        {
          (text: string) =>
            <div className="village--item--member-select--human">
              {text}
            </div>
        }
      </FormattedMessage>
      <label className="village--item--member-select--role">
        <div className="village--item--member-select--role--radio">
          <input
            defaultChecked
            name="member"
            onChange={() => props.handleMemberChange(true)(lobby.Member.A)}
            type="radio"
          />
          <span>
            {lobby.Member.A}
          </span>
        </div>
        {member.A}
      </label>
      <label className="village--item--member-select--role">
        <div className="village--item--member-select--role--radio">
          <input
            name="member"
            onChange={() => props.handleMemberChange(true)(lobby.Member.B)}
            type="radio"
          />
          <span>
            {lobby.Member.B}
          </span>
        </div>
        {member.B}
      </label>
      <label className="village--item--member-select--role">
        <div className="village--item--member-select--role--radio">
          <input
            name="member"
            onChange={() => props.handleMemberChange(true)(lobby.Member.C)}
            type="radio"
          />
          <span>
            {lobby.Member.C}
          </span>
        </div>
        {member.C}
      </label>
    </div>
  )
}
