// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {type ClickNavigationButton, type PostChat, clickNavigationButton, postChat} from '../actions'
import CommandPostMortem, {type DispatchProps, type StateProps} from '../components/organisms/CommandPostMortem'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigation: [
    {
      id: 'CommandNavigation.showResult',
      type: ActionTypes.SHOW_RESULT
    },
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
const CommandPostMortemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandPostMortem)

export default CommandPostMortemContainer
