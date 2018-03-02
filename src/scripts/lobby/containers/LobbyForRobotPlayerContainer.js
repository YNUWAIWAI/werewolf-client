import LobbyForRobotPlayer from '../components/LobbyForRobotPlayer'
import {connect} from 'react-redux'

const mapStateToProps = state => state.lobbyForRobotPlayer
const LobbyForRobotPlayerContainer = connect(
  mapStateToProps
)(LobbyForRobotPlayer)

export default LobbyForRobotPlayerContainer
