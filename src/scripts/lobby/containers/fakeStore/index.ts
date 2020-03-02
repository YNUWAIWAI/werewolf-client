/* eslint no-console: 0 */
import {
  Action,
  Dispatch,
  Store
} from 'redux'
import {ReducerState} from '../../reducers'
import {initialState as advancedSearch} from '../../reducers/advancedSearch'
import {initialState as avatarImageList} from '../../reducers/avatarImageList'
import {initialState as buildVillage} from '../../reducers/buildVillage'
import {initialState as confirmation} from '../../reducers/confirmation'
import {initialState as createNewHumanAvatar} from '../../reducers/createNewHumanAvatar'
import {initialState as createNewRobotAvatar} from '../../reducers/createNewRobotAvatar'
import {initialState as history} from '../../reducers/history'
import {initialState as idSearch} from '../../reducers/idSearch'
import {initialState as language} from '../../reducers/language'
import {initialState as lobbyForAudience} from '../../reducers/lobbyForAudience'
import {initialState as lobbyForHumanPlayer} from '../../reducers/lobbyForHumanPlayer'
import {initialState as lobbyForRobotPlayer} from '../../reducers/lobbyForRobotPlayer'
import {initialState as main} from '../../reducers/main'
import {initialState as modal} from '../../reducers/modal'
import {initialState as obfucator} from '../../reducers/obfucator'
import {initialState as ping} from '../../reducers/ping'
import {initialState as selectHumanAvatar} from '../../reducers/selectHumanAvatar'
import {initialState as selectRobotAvatar} from '../../reducers/selectRobotAvatar'
import {initialState as settings} from '../../reducers/settings'
import {initialState as token} from '../../reducers/token'
import {initialState as waitingForPlayers} from '../../reducers/waitingForPlayers'

export default (state?: Partial<ReducerState>): Store<ReducerState, Action<unknown>> => {
  const initialState: ReducerState = {
    advancedSearch,
    avatarImageList,
    buildVillage,
    confirmation,
    createNewHumanAvatar,
    createNewRobotAvatar,
    history,
    idSearch,
    language,
    lobbyForAudience,
    lobbyForHumanPlayer,
    lobbyForRobotPlayer,
    main,
    modal,
    obfucator,
    ping,
    selectHumanAvatar,
    selectRobotAvatar,
    settings,
    token,
    waitingForPlayers
  }
  const dispatch: Dispatch<Action<unknown>> = action => {
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
    subscribe,
    [Symbol.observable]: (): any => {}
  }

  return store
}
