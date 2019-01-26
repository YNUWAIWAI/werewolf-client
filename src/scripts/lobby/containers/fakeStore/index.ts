/* eslint no-console: 0 */
import {ReducerState} from '../../reducers'
import {Store} from 'redux'
import {initialState as advancedSearch} from '../../reducers/advancedSearch'
import {initialState as app} from '../../reducers/app'
import {initialState as buildVillage} from '../../reducers/buildVillage'
import {initialState as connectingToRobotPlayer} from '../../reducers/connectingToRobotPlayer'
import {initialState as history} from '../../reducers/history'
import {initialState as idSearch} from '../../reducers/idSearch'
import {initialState as language} from '../../reducers/language'
import {initialState as lobbyForAudience} from '../../reducers/lobbyForAudience'
import {initialState as lobbyForHumanPlayer} from '../../reducers/lobbyForHumanPlayer'
import {initialState as lobbyForRobotPlayer} from '../../reducers/lobbyForRobotPlayer'
import {initialState as main} from '../../reducers/main'
import {initialState as ping} from '../../reducers/ping'
import {initialState as settings} from '../../reducers/settings'
import {initialState as token} from '../../reducers/token'
import {initialState as waitingForPlayers} from '../../reducers/waitingForPlayers'

export default (state?: Record<string, unknown>): Store => {
  const initialState: ReducerState = {
    advancedSearch,
    app,
    buildVillage,
    connectingToRobotPlayer,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    ping,
    settings,
    token,
    waitingForPlayers
  }
  const dispatch = (action: any) => {
    console.log('dispatch', action)

    return action
  }
  const getState = () => ({
    ... initialState,
    ... state
  })
  const replaceReducer = () => {
    console.log('replaceReducer')
  }
  const subscribe = () => {
    console.log('subscribe')

    return () => {
      console.log('unsubscribe')
    }
  }
  const store = {
    dispatch,
    getState,
    replaceReducer,
    subscribe
  }

  return store
}
