import {ClickNavigationButton, PostChat, clickNavigationButton, postChat} from '../actions'
import CommandGrave, {DispatchProps, StateProps} from '../components/organisms/CommandPostMortem'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.commandGrave,
  characterLimit: state.base.village.chatSettings.characterLimit
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleNavigationClick: type => {
    dispatch(clickNavigationButton(type))
  },
  handlePostChat: channel => text => {
    dispatch(
      postChat({
        channel,
        text
      })
    )
  }
})
const CommandGraveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandGrave)

export default CommandGraveContainer
