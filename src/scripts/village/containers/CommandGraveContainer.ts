import {
  ClickNavigationButton,
  PostChat,
  clickNavigationButton,
  postChat
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/CommandGrave'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  ... state.commandGrave,
  language: state.language,
  maxLengthOfUnicodeCodePoints: state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
  navigatable: !state.obfucator.visible,
  suggestedData: state.suggest.data
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
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
