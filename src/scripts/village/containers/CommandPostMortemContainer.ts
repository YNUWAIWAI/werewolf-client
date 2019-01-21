import * as ActionTypes from '../constants/ActionTypes'
import {ClickNavigationButton, PostChat, clickNavigationButton, postChat} from '../actions'
import CommandPostMortem, {DispatchProps, StateProps} from '../components/organisms/CommandPostMortem'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigation: [
    {
      id: 'CommandNavigation.showResult',
      type: ActionTypes.Navigation.SHOW_RESULT
    },
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.Navigation.RETURN_TO_LOBBY
    }
  ]
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleNavigationClick: type => {
    dispatch(clickNavigationButton(type))
  },
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
