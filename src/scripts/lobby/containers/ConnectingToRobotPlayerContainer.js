import ConnectingToRobotPlayer from '../components/ConnectingToRobotPlayer'
import {connect} from 'react-redux'

const mapStateToProps = state => state.connectingToRobotPlayer
const ConnectingToRobotPlayerContainer = connect(
  mapStateToProps
)(ConnectingToRobotPlayer)

export default ConnectingToRobotPlayerContainer
