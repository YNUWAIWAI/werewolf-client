import app from './app'
import buildVillage from './buildVillage'
import {combineReducers} from 'redux'
import connectingToRobotPlayer from './connectingToRobotPlayer'
import history from './history'
import lobbyForAudience from './lobbyForAudience'
import lobbyForHumanPlayer from './lobbyForHumanPlayer'
import lobbyForRobotPlayer from './lobbyForRobotPlayer'
import main from './main'
import settings from './settings'
import waitingForPlayers from './waitingForPlayers'

const reducer = combineReducers({
  app,
  buildVillage,
  connectingToRobotPlayer,
  history,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer,
  main,
  settings,
  waitingForPlayers
})

export default reducer
