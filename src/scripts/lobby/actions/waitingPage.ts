import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace WaitingPage {
  type ConfirmKickOutPlayer = {
    name: string
    token: lobby.Token
    type: ActionTypes.WaitingPage.CONFIRM_KICK_OUT_PLAYER
  }
  type KickOutPlayer = {
    type: ActionTypes.WaitingPage.KICK_OUT_PLAYER
  }
}

const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}): WaitingPage.ConfirmKickOutPlayer => ({
  name: values.name,
  token: values.token,
  type: ActionTypes.WaitingPage.CONFIRM_KICK_OUT_PLAYER
})

const kickOutPlayer = (): WaitingPage.KickOutPlayer => ({
  type: ActionTypes.WaitingPage.KICK_OUT_PLAYER
})

export const waitinngPage = {
  confirmKickOutPlayer,
  kickOutPlayer
}
