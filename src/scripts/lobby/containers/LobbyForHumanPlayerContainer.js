import LobbyForHumanPlayer from '../components/LobbyForHumanPlayer'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.lobbyForHumanPlayer
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const LobbyForHumanPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyForHumanPlayer)

export default LobbyForHumanPlayerContainer
