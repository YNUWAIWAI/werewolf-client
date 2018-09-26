// @flow
import {type KickOutPlayer, kickOutPlayer} from '../actions'
import WaitingForPlayers, {type DispatchProps, type StateProps} from '../components/WaitingForPlayers'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | KickOutPlayer

const mapStateToProps = (state: ReducerState): StateProps => {
  const amIHost = state.waitingForPlayers.players.some(v => v.isHost && v.isMe)
  const players = state.waitingForPlayers.players.map(player => {
    const result = state.ping.results.find(r => r.token === player.token)

    if (result) {
      return {
        avatarImage: player.avatarImage,
        canKickOut: amIHost && !player.isMe,
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
      isHost: player.isHost,
      isMe: player.isMe,
      name: player.name,
      ping: '99.999 s',
      pingStatus: 'danger',
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
  kickOut: token => () => {
    dispatch(kickOutPlayer(token))
  }
})
const WaitingForPlayersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingForPlayers)

export default WaitingForPlayersContainer
