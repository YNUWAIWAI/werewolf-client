import {Message} from '../constants/ActionTypes'
import {lobby as lobbyType} from '../types'

export interface Message$AuthorizationRequest {
  payload: lobbyType.Payload$AuthorizationRequest
  type: Message.AUTHORIZATION_REQUEST
}
const authorizationRequest = (payload: lobbyType.Payload): Message$AuthorizationRequest => ({
  payload: payload as lobbyType.Payload$AuthorizationRequest,
  type: Message.AUTHORIZATION_REQUEST
})

export interface Message$AuthorizationRequestAcceptedResponse {
  payload: lobbyType.Payload$AuthorizationRequestAcceptedResponse
  type: Message.AUTHORIZATION_REQUEST_ACCEPTED_RESPONSE
}
const authorizationRequestAcceptedResponse = (payload: lobbyType.Payload): Message$AuthorizationRequestAcceptedResponse => ({
  payload: payload as lobbyType.Payload$AuthorizationRequestAcceptedResponse,
  type: Message.AUTHORIZATION_REQUEST_ACCEPTED_RESPONSE
})

export interface Message$Avatar {
  payload: lobbyType.Payload$Avatar
  type: Message.AVATAR
}
const avatar = (payload: lobbyType.Payload): Message$Avatar => ({
  payload: payload as lobbyType.Payload$Avatar,
  type: Message.AVATAR
})

export interface Message$HumanPlayerSelectionPage {
  payload: lobbyType.Payload$HumanPlayerSelectionPage
  type: Message.HUMAN_PLAYER_SELECTION_PAGE
}
const humanPlayerSelectionPage = (payload: lobbyType.Payload): Message$HumanPlayerSelectionPage => ({
  payload: payload as lobbyType.Payload$HumanPlayerSelectionPage,
  type: Message.HUMAN_PLAYER_SELECTION_PAGE
})

export interface Message$Lobby {
  payload: lobbyType.Payload$Lobby
  type: Message.LOBBY
}
const lobby = (payload: lobbyType.Payload): Message$Lobby => ({
  payload: payload as lobbyType.Payload$Lobby,
  type: Message.LOBBY
})

export interface Message$OnymousAudienceSelectionPage {
  payload: lobbyType.Payload$OnymousAudienceSelectionPage
  type: Message.ONYMOUS_AUDIENCE_SELECTION_PAGE
}
const onymousAudienceSelectionPage = (payload: lobbyType.Payload): Message$OnymousAudienceSelectionPage => ({
  payload: payload as lobbyType.Payload$OnymousAudienceSelectionPage,
  type: Message.ONYMOUS_AUDIENCE_SELECTION_PAGE
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

export interface Message$RobotPlayerSelectionPage {
  payload: lobbyType.Payload$RobotPlayerSelectionPage
  type: Message.ROBOT_PLAYER_SELECTION_PAGE
}
const robotPlayerSelectionPage = (payload: lobbyType.Payload): Message$RobotPlayerSelectionPage => ({
  payload: payload as lobbyType.Payload$RobotPlayerSelectionPage,
  type: Message.ROBOT_PLAYER_SELECTION_PAGE
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
  authorizationRequest,
  authorizationRequestAcceptedResponse,
  avatar,
  humanPlayerSelectionPage,
  lobby,
  onymousAudienceSelectionPage,
  ping,
  played,
  robotPlayerSelectionPage,
  searchResult,
  settings,
  waitingPage
}
