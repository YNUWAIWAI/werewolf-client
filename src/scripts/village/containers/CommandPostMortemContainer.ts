import * as ActionTypes from '../constants/ActionTypes'
import {ClickNavigationButton, PostChat, clickNavigationButton, postChat} from '../actions'
import CommandPostMortem, {DispatchProps, StateProps} from '../components/organisms/CommandPostMortem'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {Status} from '../reducers/commandNextButton'
import {connect} from 'react-redux'

type Action =
  | ClickNavigationButton
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => {
  if (state.commandNextButton.status === Status.active) {
    return {
      navigation: [
        {
          className: 'show-result',
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          className: 'next-game',
          id: 'CommandNavigation.nextGame',
          type: ActionTypes.Navigation.NEXT_GAME
        },
        {
          className: 'return-to-lobby',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ]
    }
  } else if (state.commandNextButton.status === Status.inactive) {
    return {
      navigation: [
        {
          className: 'show-result',
          id: 'CommandNavigation.showResult',
          type: ActionTypes.Navigation.SHOW_RESULT
        },
        {
          className: 'next-game',
          disabled: true,
          id: 'CommandNavigation.nextGame',
          type: ActionTypes.Navigation.NEXT_GAME
        },
        {
          className: 'return-to-lobby',
          id: 'CommandNavigation.returnToLobby',
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      ]
    }
  }

  // state.commandNextButton.status === Status.invisible
  return {
    navigation: [
      {
        className: 'show-result',
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        className: 'return-to-lobby next-game',
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
  }
}
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
const CommandPostMortemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandPostMortem)

export default CommandPostMortemContainer
