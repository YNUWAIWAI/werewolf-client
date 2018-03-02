import app from './app'
import {combineReducers} from 'redux'
import history from './history'
import home from './home'
import lobbyForAudience from './lobbyForAudience'
import lobbyForHumanPlayer from './lobbyForHumanPlayer'
import lobbyForRobotPlayer from './lobbyForRobotPlayer'

const reducer = combineReducers({
  app,
  history,
  home,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer
})

export default reducer
