import {ChangePredictionBoard, handleBoardClick} from '../actions'
import Prediction, {DispatchProps, StateProps} from '../components/organisms/Prediction'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

type Action =
  | ChangePredictionBoard

const mapStateToProps = (state: ReducerState): StateProps => ({
  playerStatus: state.prediction.playerStatus.map(player => ({
    id: player.id,
    image: player.image,
    name: getText({
      language: state.language,
      languageMap: player.name
    }),
    status: player.status
  })),
  roleStatus: state.prediction.roleStatus.map(role => ({
    id: role.id,
    image: role.image,
    name: getText({
      language: state.language,
      languageMap: role.name
    }),
    numberOfAgents: role.numberOfAgents
  })),
  spec: state.prediction.spec,
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
