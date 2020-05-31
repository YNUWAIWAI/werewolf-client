import {
  LobbyForHumanPlayer as Component,
  DispatchProps,
  StateProps
} from '../components/templates/LobbyForHumanPlayer'
import {
  SelectVillage,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForHumanPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})

export const LobbyForHumanPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
