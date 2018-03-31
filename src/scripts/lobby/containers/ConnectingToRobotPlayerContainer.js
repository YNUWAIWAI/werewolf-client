// @flow
import ConnectingToRobotPlayer, {type StateProps} from '../components/ConnectingToRobotPlayer'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.connectingToRobotPlayer
const ConnectingToRobotPlayerContainer = connect(
  mapStateToProps
)(ConnectingToRobotPlayer)

export default ConnectingToRobotPlayerContainer
