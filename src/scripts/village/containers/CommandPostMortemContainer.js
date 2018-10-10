// @flow
import * as ActionTypes from '../constants/ActionTypes'
import CommandPostMortem, {type DispatchProps, type StateProps} from '../components/CommandPostMortem'
import {type PostChat, postChat} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigation: [
    {
      text: (() => ({
        en: 'Show result',
        fr: 'Show result',
        it: 'Show result',
        ja: '結果を表示'
      })[state.language])(),
      type: ActionTypes.SHOW_RESULT
    },
    {
      text: (() => ({
        en: 'Return to lobby',
        fr: 'Return to lobby',
        it: 'Return to lobby',
        ja: 'ロビーへ戻る'
      })[state.language])(),
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handlePostChat: kind => text => {
    dispatch(
      postChat({
        kind,
        text
      })
    )
  }
})
const CommandPostMortemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandPostMortem)

export default CommandPostMortemContainer
