// @flow
import React from 'react'
import ResultCell from './ResultCell'
import {WEREWOLF_SIDE} from '../constants/Role'
import {xor} from '../module/util'

type StateProps = {
  +agents: {
    +all: Agent[],
    +mine?: Agent
  },
  +visible: boolean
}
type OwnProps = {}
type Props =
  & StateProps
  & OwnProps

export default function Result(props: Props) {
  if (!props.visible) {
    return ''
  }
  const cells = props.agents.all.map(agent => [
    <ResultCell
      image={agent.image}
      key={`${agent.id}image`}
      result={agent.result}
      status={agent.status}
      type="image"
    />,
    <ResultCell
      key={`${agent.id}name`}
      result={agent.result}
      status={agent.status}
      text={agent.name.ja}
      type="name"
    />,
    <ResultCell
      key={`${agent.id}status`}
      result={agent.result}
      status={agent.status}
      text={agent.status === 'alive' ? '生存' : '死亡'}
      type="status"
    />,
    <ResultCell
      key={`${agent.id}result`}
      result={agent.result}
      status={agent.status}
      text={agent.result === 'win' ? '勝利' : '敗北'}
      type="result"
    />,
    <ResultCell
      image={agent.role.roleImage}
      key={`${agent.id}roleImage`}
      result={agent.result}
      status={agent.status}
      tooltip={agent.role.roleName.ja}
      type="roleImage"
    />,
    <ResultCell
      image={agent.userAvatar}
      key={`${agent.id}userAvatar`}
      result={agent.result}
      status={agent.status}
      type="userAvatar"
    />,
    <ResultCell
      key={`${agent.id}userName`}
      result={agent.result}
      status={agent.status}
      text={agent.userName}
      type="userName"
    />
  ])
  const summary = (() => {
    if (props.agents.mine) {
      const mine = props.agents.mine
      const isWerewolfSide = WEREWOLF_SIDE.includes(mine.role['@id'])
      const isWin = mine.result === 'win'
      const text = `人間側の${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`

      return <ResultCell key="summary" text={text} type="summary" />
    }
    const isWerewolfSide = WEREWOLF_SIDE.includes(props.agents.all[0].role['@id'])
    const isWin = props.agents.all[0].result === 'win'
    const text = `人間側が${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}しました`

    return <ResultCell key="summary" text={text} type="summary" />

  })()

  return (
    <div className="result">
      {
        [
          summary,
          ... cells
        ]
      }
    </div>
  )
}
