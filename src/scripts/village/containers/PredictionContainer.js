import Prediction from '../components/Prediction'
import {connect} from 'react-redux'
import {handleBoardClick} from '../actions'

const mapStateToProps = state => state.prediction

const mapDispatchToProps = dispatch => ({
  handleBoardClick: (nextState, playerId, roleId) => dispatch(handleBoardClick(nextState, playerId, roleId))
})

const PredictionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prediction)

export default PredictionContainer
