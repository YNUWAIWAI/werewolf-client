// @flow
import {type ChangePredictionBoard, handleBoardClick} from '../actions'
import Prediction, {type DispatchProps, type StateProps} from '../components/Prediction'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangePredictionBoard

const mapStateToProps = (state: ReducerState): StateProps => state.prediction

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
