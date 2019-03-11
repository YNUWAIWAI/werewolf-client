/* global lobby */
import {
  ConfirmKickOutPlayer,
  Transition,
  confirmKickOutPlayer,
  transition
} from '../actions'
import WaitingForPlayers, {DispatchProps, StateProps} from '../components/templates/WaitingForPlayers'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ConfirmKickOutPlayer
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => {
  const amIHost = state.waitingForPlayers.players.some(v => v.isHost && v.isMe)
  const players = state.waitingForPlayers.players.map(player => {
    const result = state.ping.results.find(r => r.token === player.token)

    if (result) {
      return {
        avatarImage: player.avatarImage,
        canKickOut: amIHost && !player.isMe,
        isAnonymous: player.isAnonymous,
        isHost: player.isHost,
        isMe: player.isMe,
        name: player.name,
        ping: result.ping,
        pingStatus: result.status,
        token: player.token
      }
    }

    return {
      avatarImage: player.avatarImage,
      canKickOut: amIHost && !player.isMe,
      isAnonymous: player.isAnonymous,
      isHost: player.isHost,
      isMe: player.isMe,
      name: player.name,
      ping: '99.999 s',
      pingStatus: lobby.PingStatus.danger,
      token: player.token
    }

  })

  if (state.waitingForPlayers.village) {
    return {
      isPlayer: state.waitingForPlayers.isPlayer,
      menuItems: state.waitingForPlayers.menuItems,
      players,
      village: state.waitingForPlayers.village
    }
  }

  return {
    isPlayer: state.waitingForPlayers.isPlayer,
    menuItems: state.waitingForPlayers.menuItems,
    players
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  confirmKickOutPlayer: token => () => {
    dispatch(confirmKickOutPlayer(token))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const WaitingForPlayersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingForPlayers)

export default WaitingForPlayersContainer
