// @flow
import LobbyForHumanPlayer, {type DispatchProps, type StateProps} from '../components/LobbyForHumanPlayer'
import {type SelectVillage, selectVillage} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForHumanPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const LobbyForHumanPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForHumanPlayer)

export default LobbyForHumanPlayerContainer
