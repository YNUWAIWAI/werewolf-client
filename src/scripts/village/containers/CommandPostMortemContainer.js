// @flow
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
        en: '',
        ja: '結果を表示'
      })['ja'])(),
      type: 'OPEN_RESULT'
    },
    {
      text: (() => ({
        en: '',
        ja: 'ロビーへ戻る'
      })['ja'])(),
      type: 'RETURN_TO_LOBBY'
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
