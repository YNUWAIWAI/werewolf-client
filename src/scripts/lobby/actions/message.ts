import {Message} from '../constants/ActionTypes'
import {lobby as lobbyType} from '../types'

export interface Message$Avatar {
  payload: lobbyType.Payload$Avatar
  type: Message.AVATAR
}
const avatar = (payload: lobbyType.Payload): Message$Avatar => ({
  payload: payload as lobbyType.Payload$Avatar,
  type: Message.AVATAR
})

export interface Message$Lobby {
  payload: lobbyType.Payload$Lobby
  type: Message.LOBBY
}
const lobby = (payload: lobbyType.Payload): Message$Lobby => ({
  payload: payload as lobbyType.Payload$Lobby,
  type: Message.LOBBY
})

export interface Message$Ping {
  payload: lobbyType.Payload$Ping
  type: Message.PING
}
const ping = (payload: lobbyType.Payload): Message$Ping => ({
  payload: payload as lobbyType.Payload$Ping,
  type: Message.PING
})

export interface Message$Played {
  payload: lobbyType.Payload$Played
  type: Message.PLAYED
}
const played = (payload: lobbyType.Payload): Message$Played => ({
  payload: payload as lobbyType.Payload$Played,
  type: Message.PLAYED
})

export interface Message$SearchResult {
  payload: lobbyType.Payload$SearchResult
  type: Message.SEARCH_RESULT
}
const searchResult = (payload: lobbyType.Payload): Message$SearchResult => ({
  payload: payload as lobbyType.Payload$SearchResult,
  type: Message.SEARCH_RESULT
})

export interface Message$Settings {
  payload: lobbyType.Payload$Settings
  type: Message.SETTINGS
}
const settings = (payload: lobbyType.Payload): Message$Settings => ({
  payload: payload as lobbyType.Payload$Settings,
  type: Message.SETTINGS
})

export interface Message$WaitingPage {
  payload: lobbyType.Payload$WaitingPage
  type: Message.WAITING_PAGE
}
const waitingPage = (payload: lobbyType.Payload): Message$WaitingPage => ({
  payload: payload as lobbyType.Payload$WaitingPage,
  type: Message.WAITING_PAGE
})

export const message = {
  avatar,
  lobby,
  ping,
  played,
  searchResult,
  settings,
  waitingPage
}
