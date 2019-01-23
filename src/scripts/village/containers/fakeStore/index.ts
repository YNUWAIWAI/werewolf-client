import {ReducerState} from '../../reducers'
import {Store} from 'redux'
import {initialState as agents} from '../../reducers/agents'
import {initialState as base} from '../../reducers/base'
import {initialState as chat} from '../../reducers/chat'
import {initialState as commandInputBox} from '../../reducers/commandInputBox'
import {initialState as commandSelection} from '../../reducers/commandSelection'
import {initialState as hideButton} from '../../reducers/hideButton'
import {initialState as language} from '../../reducers/language'
import {initialState as modal} from '../../reducers/modal'
import {initialState as obfucator} from '../../reducers/obfucator'
import {initialState as prediction} from '../../reducers/prediction'
import {initialState as result} from '../../reducers/result'
import {initialState as roles} from '../../reducers/roles'
import {initialState as timer} from '../../reducers/timer'

export default (state?: Record<string, unknown>): Store => {
  const initialState: ReducerState = {
    agents,
    base,
    chat,
    commandInputBox,
    commandSelection,
    hideButton,
    language,
    modal,
    obfucator,
    prediction,
    result,
    roles,
    timer
  }
  const dispatch = (action: any) => {
    console.log('dispatch')

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
    // console.log('subscribe')
    return () => {
      // console.log('unsubscribe')
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
