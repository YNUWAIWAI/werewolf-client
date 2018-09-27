// @flow
import {type ChangePredictionBoard, handleBoardClick} from '../actions'
import Prediction, {type DispatchProps, type StateProps} from '../components/Prediction'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangePredictionBoard

const mapStateToProps = (state: ReducerState): StateProps => ({
  playerStatus: state.prediction.playerStatus.map(player => ({
    id: player.id,
    image: player.image,
    name: player.name[state.language],
    status: player.status
  })),
  roleStatus: state.prediction.roleStatus.map(role => ({
    caption: role.caption[state.language],
    id: role.id,
    image: role.image,
    numberOfAgents: role.numberOfAgents
  })),
  table: state.prediction.table
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleBoardClick: (playerId, roleId) => nextState => {
    dispatch(handleBoardClick(nextState, playerId, roleId))
  }
})

const PredictionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prediction)

export default PredictionContainer
