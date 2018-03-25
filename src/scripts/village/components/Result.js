// @flow
import React from 'react'
import ResultCell from './ResultCell'

export type StateProps = {
  +rows: Array<{
    +agentName: string,
    +agentImage: string,
    +agentId: number,
    +result: TResult,
    +roleImage: string,
    +roleName: string,
    +status: AgentStatus,
    +userAvatar: string,
    +userName: string
  }>,
  +summary: string,
  +visible: boolean
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Result(props: Props) {
  if (!props.visible) {
    return ''
  }
  const cells = props.rows.map(row => [
    <ResultCell
      image={row.agentImage}
      key={`${row.agentId}image`}
      result={row.result}
      status={row.status}
      type="image"
    />,
    <ResultCell
      key={`${row.agentId}name`}
      result={row.result}
      status={row.status}
      text={row.agentName}
      type="name"
    />,
    <ResultCell
      key={`${row.agentId}status`}
      result={row.result}
      status={row.status}
      text={row.status === 'alive' ? '生存' : '死亡'}
      type="status"
    />,
    <ResultCell
      key={`${row.agentId}result`}
      result={row.result}
      status={row.status}
      text={row.result === 'win' ? '勝利' : '敗北'}
      type="result"
    />,
    <ResultCell
      image={row.roleImage}
      key={`${row.agentId}roleImage`}
      result={row.result}
      status={row.status}
      tooltip={row.roleName}
      type="roleImage"
    />,
    <ResultCell
      image={row.userAvatar}
      key={`${row.agentId}userAvatar`}
      result={row.result}
      status={row.status}
      type="userAvatar"
    />,
    <ResultCell
      key={`${row.agentId}userName`}
      result={row.result}
      status={row.status}
      text={row.userName}
      type="userName"
    />
  ])

  return (
    <div className="result">
      {
        [
          <ResultCell key="summary" text={props.summary} type="summary" />,
          ... cells
        ]
      }
    </div>
  )
}
