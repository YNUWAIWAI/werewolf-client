import CommandInputBox, {DispatchProps, StateProps} from '../components/organisms/CommandInputBox'
import {PostChat, postChat} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | PostChat

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
