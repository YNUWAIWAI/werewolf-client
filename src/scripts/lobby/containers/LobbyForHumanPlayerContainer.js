import LobbyForHumanPlayer from '../components/LobbyForHumanPlayer'
import {connect} from 'react-redux'

const mapStateToProps = state => state.lobbyForHumanPlayer
const LobbyForHumanPlayerContainer = connect(
  mapStateToProps
)(LobbyForHumanPlayer)

export default LobbyForHumanPlayerContainer
