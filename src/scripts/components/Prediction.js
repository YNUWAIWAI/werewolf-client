import PredictionItem from './PredictionItem'
import PredictionPlayer from './PredictionPlayer'
import PredictionRole from './PredictionRole'
import React from 'react'

export default function Prediction({handleBoardClick, roleStatus, playerStatus, table}) {
  const predictionTable = [
    <div key={'null'}></div>,
    ... roleStatus.map(role => <PredictionRole key={role.id} {... role} />),
    ... playerStatus.map(player => [
      <PredictionPlayer key={player.id} {... player} />,
      ... roleStatus.map(role => <PredictionItem key={player.id + role.id} {... table[player.id][role.id]} playerId={player.id} roleId={role.id} handleBoardClick={handleBoardClick}/>)
    ])
  ]
  const style = {
    grid: `repeat(${1 + playerStatus.length}, 1fr) / repeat(${1 + roleStatus.length}, 1fr)`
  }

  return (
    <div id="prediction" class="prediction" style={style}>
      {predictionTable}
    </div>
  )
}
