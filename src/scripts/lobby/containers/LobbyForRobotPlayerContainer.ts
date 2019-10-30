import LobbyForRobotPlayer, {
  DispatchProps,
  StateProps
} from '../components/templates/LobbyForRobotPlayer'
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

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForRobotPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const LobbyForRobotPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForRobotPlayer)

export default LobbyForRobotPlayerContainer
