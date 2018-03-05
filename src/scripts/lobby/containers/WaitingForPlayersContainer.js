import WaitingForPlayers from '../components/WaitingForPlayers'
import {connect} from 'react-redux'

const mapStateToProps = state => state.waitingForPlayers
const WaitingForPlayersContainer = connect(
  mapStateToProps
)(WaitingForPlayers)

export default WaitingForPlayersContainer
