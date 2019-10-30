import CommandInputBox, {
  DispatchProps,
  StateProps
} from '../components/organisms/CommandInputBox'
import {
  PostChat,
  postChat
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.commandInputBox,
  language: state.language,
  maxLengthOfUnicodeCodePoints: state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
  maxNumberOfChatMessages: state.base.village.chatSettings.maxNumberOfChatMessages,
  suggesttedData: state.suggest.data
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handlePostChat: channel => text => {
    dispatch(
      postChat({
        channel,
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
