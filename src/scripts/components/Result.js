import React from 'react'
import ResultCell from './ResultCell'
import {WEREWOLF_SIDE} from '../constants/Role'

export default function Result(props) {
  if (!props.isVisible) {
    return ''
  }
  const summary = (() => {
    const isWerewolfSide = WEREWOLF_SIDE.includes(props.mine.myRole['@id'])
    const isWin = props.mine.result === 'win'
    const text = `人間側の${isWerewolfSide ^ isWin ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`

    return <ResultCell key="summary" text={text} type="summary" />
  })()

  const cells = props.agents.map(agent => [
    <ResultCell key={`${agent.agentId}image`} status={agent.status} image={props.mine.myAgentImage} type="image" />,
    <ResultCell key={`${agent.agentId}name`} status={agent.status} text={props.mine.myAgentName.ja} type="name" />,
    <ResultCell key={`${agent.agentId}status`} status={agent.status} text={agent.status === 'alive' ? '生存' : '死亡'} type="status" />,
    <ResultCell key={`${agent.agentId}result`} status={agent.status} text={agent.result === 'win' ? '勝利' : '敗北'} type="result" />,
    <ResultCell key={`${agent.agentId}roleImage`} status={agent.status} image={props.mine.myRole.myRoleImage} tooltip={props.mine.myRole.myRoleName.ja} type="roleImage" />,
    <ResultCell key={`${agent.agentId}userAvatar`} status={agent.status} image={agent.userAvatar} type="userAvatar" />,
    <ResultCell key={`${agent.agentId}userName`} status={agent.status} text={agent.userName} type="userName" />
  ])

  return (
    <div id="result" className={`result ${props.isVisible ? '' : 'hidden'}`}>
      {
        [
          summary,
          ... cells
        ]
      }
    </div>
  )
}
