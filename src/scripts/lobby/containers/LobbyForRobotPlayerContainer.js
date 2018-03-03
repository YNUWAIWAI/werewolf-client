import LobbyForRobotPlayer from '../components/LobbyForRobotPlayer'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.lobbyForRobotPlayer
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const LobbyForRobotPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForRobotPlayer)

export default LobbyForRobotPlayerContainer
