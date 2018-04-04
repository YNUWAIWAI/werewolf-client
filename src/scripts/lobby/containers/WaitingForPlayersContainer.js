// @flow
import WaitingForPlayers, {type StateProps} from '../components/WaitingForPlayers'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const defaultAvatarImage = ''
const mapStateToProps = (state: ReducerState): StateProps => {
  if (state.waitingForPlayers.village) {
    return {
      isPlayer: state.waitingForPlayers.isPlayer,
      menuItems: state.waitingForPlayers.menuItems,
      players: state.waitingForPlayers.players.map(player => ({
        avatarImage: player.avatarImage ? player.avatarImage : defaultAvatarImage,
        isHost: player.isHost,
        name: player.name,
        token: player.token
      })),
      village: state.waitingForPlayers.village
    }
  }

  return {
    isPlayer: state.waitingForPlayers.isPlayer,
    menuItems: state.waitingForPlayers.menuItems,
    players: state.waitingForPlayers.players.map(player => ({
      avatarImage: player.avatarImage ? player.avatarImage : defaultAvatarImage,
      isHost: player.isHost,
      name: player.name,
      token: player.token
    }))
  }
}
const WaitingForPlayersContainer = connect(
  mapStateToProps
)(WaitingForPlayers)

export default WaitingForPlayersContainer
