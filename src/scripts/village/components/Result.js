// @flow
import React from 'react'
import ResultCell from './ResultCell'
import {WEREWOLF_SIDE} from '../constants/Role'
import {xor} from '../module/util'

type StateProps = {
  +agents: Agent[],
  +mine: Agent,
  +visible: boolean
}
type Props =
  & StateProps

export default function Result(props: Props) {
  if (!props.visible) {
    return ''
  }
  const summary = (() => {
    const isWerewolfSide = WEREWOLF_SIDE.includes(props.mine.myRole['@id'])
    const isWin = props.mine.result === 'win'
    const text = `人間側の${xor(isWerewolfSide, isWin) ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`

    return <ResultCell key="summary" text={text} type="summary" />
  })()

  const cells = props.agents.map(agent => [
    <ResultCell
      image={props.mine.myAgentImage}
      key={`${agent.id}image`}
      result={agent.result}
      status={agent.status}
      type="image"
    />,
    <ResultCell
      key={`${agent.id}name`}
      result={agent.result}
      status={agent.status}
      text={props.mine.myAgentName.ja}
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
      image={props.mine.myRole.myRoleImage}
      key={`${agent.id}roleImage`}
      result={agent.result}
      status={agent.status}
      tooltip={props.mine.myRole.myRoleName.ja}
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
