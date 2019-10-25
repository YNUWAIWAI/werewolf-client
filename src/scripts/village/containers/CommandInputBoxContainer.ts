import CommandInputBox, {DispatchProps, StateProps} from '../components/organisms/CommandInputBox'
import {PostChat, postChat} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.commandInputBox,
  maxLengthOfUnicodeCodePoints: state.base.village.chatSettings.characterLimit,
  language: state.language,
  postCountLimit: state.base.village.chatSettings.limit,
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
