import LobbyForHumanPlayer, {DispatchProps, StateProps} from '../components/templates/LobbyForHumanPlayer'
import {
  SelectVillage,
  Transition,
  selectVillage,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForHumanPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const LobbyForHumanPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForHumanPlayer)

export default LobbyForHumanPlayerContainer
