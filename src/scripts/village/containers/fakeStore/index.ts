/* eslint no-console: 0 */
import {
  Action,
  Dispatch,
  Store
} from 'redux'
import {ReducerState} from '../../reducers'
import {initialState as base} from '../../reducers/base'
import {initialState as chat} from '../../reducers/chat'
import {initialState as command} from '../../reducers/command'
import {initialState as commandGrave} from '../../reducers/commandGrave'
import {initialState as commandInputBox} from '../../reducers/commandInputBox'
import {initialState as commandPostMortem} from '../../reducers/commandPostMortem'
import {initialState as commandSelection} from '../../reducers/commandSelection'
import {initialState as hideButton} from '../../reducers/hideButton'
import {initialState as language} from '../../reducers/language'
import {initialState as mine} from '../../reducers/mine'
import {initialState as modal} from '../../reducers/modal'
import {initialState as obfucator} from '../../reducers/obfucator'
import {initialState as prediction} from '../../reducers/prediction'
import {initialState as result} from '../../reducers/result'
import {initialState as suggest} from '../../reducers/suggest'
import {initialState as theme} from '../../reducers/theme'
import {initialState as timer} from '../../reducers/timer'

export default (state?: Partial<ReducerState>): Store<ReducerState, Action<unknown>> => {
  const initialState: ReducerState = {
    base,
    chat,
    command,
    commandGrave,
    commandInputBox,
    commandPostMortem,
    commandSelection,
    hideButton,
    language,
    mine,
    modal,
    obfucator,
    prediction,
    result,
    suggest,
    theme,
    timer
  }
  const dispatch: Dispatch<Action<unknown>> = action => {
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
