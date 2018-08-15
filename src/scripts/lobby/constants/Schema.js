// @flow
import {VERSION} from './Version'

const BASE_URL = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${BASE_URL}/client2server`
const SERVER2CLIENT = `${BASE_URL}/server2client`

export const buildVillage = `${CLIENT2SERVER}/buildVillage.json`
export const enterLobby = `${CLIENT2SERVER}/enterLobby.json`
export const getAvatar = `${CLIENT2SERVER}/getAvatar.json`
export const kickOutPlayer = `${CLIENT2SERVER}/kickOutPlayer.json`
export const leaveWaitingPage = `${CLIENT2SERVER}/leaveWaitingPage.json`
export const pong = `${CLIENT2SERVER}/pong.json`
export const selectVillage = `${CLIENT2SERVER}/selectVillage.json`
export const avatar = `${SERVER2CLIENT}/avatar.json`
export const lobby = `${SERVER2CLIENT}/lobby.json`
export const ping = `${SERVER2CLIENT}/ping.json`
export const waitingPage = `${SERVER2CLIENT}/waitingPage.json`
