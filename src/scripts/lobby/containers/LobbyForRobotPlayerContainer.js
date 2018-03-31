// @flow
import LobbyForRobotPlayer, {type DispatchProps, type StateProps} from '../components/LobbyForRobotPlayer'
import {type SelectVillage, selectVillage} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
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
