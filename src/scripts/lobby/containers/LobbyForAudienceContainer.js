import LobbyForAudience from '../components/LobbyForAudience'
import {connect} from 'react-redux'

const mapStateToProps = state => state.lobbyForAudience
const LobbyForAudienceContainer = connect(
  mapStateToProps
)(LobbyForAudience)

export default LobbyForAudienceContainer
