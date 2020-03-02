import Component, {
  DispatchProps,
  StateProps
} from '../components/templates/WaitingForPlayers'
import {
  ConfirmKickOutPlayer,
  confirmKickOutPlayer
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {lobby} from '../types'

type Action =
  | ConfirmKickOutPlayer

const mapStateToProps = (state: ReducerState): StateProps => {
  const amIHost = state.waitingForPlayers.players.some(player => player.isHost && player.isMe)
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

  return {
    isPlayer: state.waitingForPlayers.isPlayer,
    menuItems: state.waitingForPlayers.menuItems,
    players,
    village: state.waitingForPlayers.village
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  confirmKickOutPlayer: values => {
    dispatch(confirmKickOutPlayer(values))
  }
})
const WaitingForPlayersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default WaitingForPlayersContainer
