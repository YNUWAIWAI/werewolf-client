import LobbyForRobotPlayer, {
  DispatchProps,
  StateProps
} from '../components/templates/LobbyForRobotPlayer'
import {
  SelectVillage,
  selectVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectVillage

const mapStateToProps = (state: ReducerState): StateProps => state.lobbyForRobotPlayer
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  selectVillage: id => () => {
    dispatch(selectVillage(id))
  }
})
const LobbyForRobotPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForRobotPlayer)

export default LobbyForRobotPlayerContainer
