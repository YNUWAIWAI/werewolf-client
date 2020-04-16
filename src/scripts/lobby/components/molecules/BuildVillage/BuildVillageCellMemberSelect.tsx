import * as React from 'react'
import BuildVillageCellMemberSelectMaximum from './BuildVillageCellMemberSelect/BuildVillageCellMemberSelectMaximum'
import BuildVillageCellMemberSelectMinimum from './BuildVillageCellMemberSelect/BuildVillageCellMemberSelectMinimum'
import BuildVillageCellMemberSelectRole from './BuildVillageCellMemberSelect/BuildVillageCellMemberSelectRole'
import {lobby} from '../../../types'

type RoleSetting = Readonly<lobby.Payload$BuildVillage['roleSetting']>
interface Props {
  readonly handleMemberChange: (valid: boolean) => (value: lobby.Member) => void
  readonly handleNumberChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly role: {
    readonly A: RoleSetting
    readonly B: RoleSetting
    readonly C: RoleSetting
  }
  readonly validity: {
    readonly numberOfRobots: boolean
  }
  readonly value: {
    readonly numberOfHumans: number
    readonly numberOfPlayers: number
    readonly numberOfRobots: number
  }
}

export default function BuildVillageCellMemberSelect(props: Props) {
  return (
    <div className="lo--village--item--member-select">
      <BuildVillageCellMemberSelectMinimum
        handleNumberOfRobotsChange={props.handleNumberChange}
        navigatable={props.navigatable}
        valid={props.validity.numberOfRobots}
        value={{
          numberOfPlayers: props.value.numberOfPlayers,
          numberOfRobots: props.value.numberOfRobots
        }}
      />
      <BuildVillageCellMemberSelectMaximum
        numberOfHumans={props.value.numberOfHumans}
      />
      <BuildVillageCellMemberSelectRole
        defaultChecked
        handleMemberChange={() => props.handleMemberChange(true)(lobby.Member.A)}
        label={lobby.Member.A}
        role={props.role.A}
      />
      <BuildVillageCellMemberSelectRole
        handleMemberChange={() => props.handleMemberChange(true)(lobby.Member.B)}
        label={lobby.Member.B}
        role={props.role.B}
      />
      <BuildVillageCellMemberSelectRole
        handleMemberChange={() => props.handleMemberChange(true)(lobby.Member.C)}
        label={lobby.Member.C}
        role={props.role.C}
      />
    </div>
  )
}
