// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {type ClickNavigationButton, type PostChat, clickNavigationButton, postChat} from '../actions'
import CommandGrave, {type DispatchProps, type StateProps} from '../components/organisms/CommandPostMortem'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigation: [
    {
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.RETURN_TO_LOBBY
    }
  ]
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleNavigationClick: type => () => {
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
const CommandGraveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandGrave)

export default CommandGraveContainer
