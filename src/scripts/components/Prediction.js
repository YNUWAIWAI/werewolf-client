import PredictionItem from './PredictionItem'
import PredictionPlayer from './PredictionPlayer'
import PredictionRole from './PredictionRole'
import React from 'react'

export default function Prediction({handleBoardClick, roleStatus, playerStatus, table}) {
  const predictionTable = [
    <div key="null" />,
    ... roleStatus.map(role => <PredictionRole key={role.id} {... role} />),
    ... playerStatus.map(player => [
      <PredictionPlayer key={player.id} {... player} />,
      ... roleStatus.map(role =>
        <PredictionItem
          key={player.id + role.id}
          {... table[player.id][role.id]}
          handleBoardClick={handleBoardClick}
          playerId={player.id}
          roleId={role.id}
        />
      )
    ])
  ]
  const style = {
    grid: `repeat(${1 + playerStatus.length}, 1fr) / repeat(${1 + roleStatus.length}, 1fr)`
  }

  return (
    <div className="prediction" id="prediction" style={style}>
      {predictionTable}
    </div>
  )
}
