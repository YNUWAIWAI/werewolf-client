// @flow
import {type KickOutPlayer, kickOutPlayer} from '../actions'
import WaitingForPlayers, {type DispatchProps, type StateProps} from '../components/WaitingForPlayers'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | KickOutPlayer

const defaultAvatarImage = ''
const mapStateToProps = (state: ReducerState): StateProps => {
  const amIHost = state.waitingForPlayers.players.some(v => v.isHost && v.isMe)
  const players = state.waitingForPlayers.players.map(player => ({
    avatarImage: player.avatarImage ? player.avatarImage : defaultAvatarImage,
    canKickOut: amIHost && !player.isMe,
    isHost: player.isHost,
    isMe: player.isMe,
    name: player.name,
    token: player.token
  }))

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
