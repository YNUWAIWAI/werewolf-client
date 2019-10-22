/*
  'https://werewolf.world/lobby/schema/0.3/client2server/kickOutPlayer.json'
*/
import {
  PayloadType,
  Token
} from '..'

export interface KickOutPlayer {
  players: {
    token: Token
  }[]
  token: Token
  type: PayloadType.kickOutPlayer
}
