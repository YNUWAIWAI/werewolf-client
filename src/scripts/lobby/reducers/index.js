import app from './app'
import {combineReducers} from 'redux'
import history from './history'
import lobbyForAudience from './lobbyForAudience'
import lobbyForHumanPlayer from './lobbyForHumanPlayer'
import lobbyForRobotPlayer from './lobbyForRobotPlayer'
import main from './main'
import setting from './setting'

const reducer = combineReducers({
  app,
  history,
  lobbyForAudience,
  lobbyForHumanPlayer,
  lobbyForRobotPlayer,
  main,
  setting
})

export default reducer
