// @flow
import CommandInputBox, {type DispatchProps, type StateProps} from '../components/CommandInputBox'
import {type PostChat, type SetIsSendable, postChat, setIsSendable} from '../actions'
import type {Dispatch} from 'redux'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | PostChat
  | SetIsSendable

const mapStateToProps = (state: ReducerState): StateProps => state.commandInputBox
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
const CommandInputBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandInputBox)

export default CommandInputBoxContainer
