import LobbyForAudience from '../components/LobbyForAudience'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.lobbyForAudience
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const LobbyForAudienceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForAudience)

export default LobbyForAudienceContainer
