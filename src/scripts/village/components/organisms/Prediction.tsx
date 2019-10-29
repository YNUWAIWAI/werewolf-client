import * as React from 'react'
import PredictionCharacter from '../atoms/PredictionCharacter'
import PredictionHelp from '../atoms/PredictionHelp'
import PredictionItem from '../atoms/PredictionItem'
import PredictionRole from '../atoms/PredictionRole'
import PredictionSpec from '../atoms/PredictionSpec'
import {just} from '../../util'
import {village} from '../../types'

export interface StateProps {
  readonly characterStatus: {
    readonly id: village.CharacterId
    readonly image: string
    readonly initial: string
    readonly isSilent: boolean
    readonly name: string
    readonly status: village.CharacterStatus
  }[]
  readonly roleStatus: {
    readonly id: village.RoleId
    readonly image: string
    readonly name: string
    readonly numberOfCharacters: number
  }[]
  readonly spec: {
    role: village.RoleId
    visible: boolean
  }
  readonly table: {
    readonly [characterId in village.CharacterId]: Partial<{
      readonly [roleId in village.RoleId]: {
        readonly day: number
        readonly fixed: boolean
        readonly state: village.BoardState
      }
    }>
  }
}
export interface DispatchProps {
  handleMouseEnter: (role: village.RoleId) => () => void
  handleMouseLeave: () => void
  handleBoardClick: (ids: {characterId: village.CharacterId, roleId: village.RoleId}) => (state: village.BoardState) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function Prediction(props: Props) {
  if (props.characterStatus.length === 0 || props.roleStatus.length === 0) {
    return null
  }
  const predictionTable = [
    <PredictionHelp
      key="help"
    />,
    ... props.roleStatus.map(role => (
      <PredictionRole
        handleMouseEnter={props.handleMouseEnter(role.id)}
        handleMouseLeave={props.handleMouseLeave}
        image={role.image}
        key={role.id}
        name={role.name}
        numberOfCharacters={role.numberOfCharacters}
      />
    )),
    ... props.characterStatus.map(character => [
      <PredictionCharacter
        image={character.image}
        initial={character.initial}
        isSilent={character.isSilent}
        key={character.id}
        name={character.name}
        status={character.status}
      />,
      ... props.roleStatus.map(role => (
        <PredictionItem
          day={just(props.table[String(character.id)][role.id]).day}
          fixed={just(props.table[String(character.id)][role.id]).fixed}
          handleBoardClick={props.handleBoardClick({
            characterId: character.id,
            roleId: role.id
          })}
          key={character.id + role.id}
          state={just(props.table[String(character.id)][role.id]).state}
        />
      ))
    ])
  ]

  return (
    <>
      <div
        className="vi--prediction"
        style={{
          grid: `repeat(${1 + props.characterStatus.length}, minmax(72px, min-content)) / repeat(${1 + props.roleStatus.length}, minmax(72px, min-content))`
        }}
      >
        {predictionTable}
      </div>
      <PredictionSpec
        key="spec"
        role={props.spec.role}
        style={{
          grid: `minmax(72px, min-content) max-content / minmax(72px, min-content) minmax(calc(72px * ${props.roleStatus.length}), min-content)`
        }}
        visible={props.spec.visible}
      />
    </>
  )
}
