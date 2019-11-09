import ConnectingToRobotPlayer, {StateProps} from '../components/templates/ConnectingToRobotPlayer'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.connectingToRobotPlayer

const ConnectingToRobotPlayerContainer = connect(
  mapStateToProps
)(ConnectingToRobotPlayer)

export default ConnectingToRobotPlayerContainer
