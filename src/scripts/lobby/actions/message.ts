import * as ActionTypes from '../constants/ActionTypes'
import {lobby as lobbyType} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Message {
  type AuthorizationRequest = {
    payload: lobbyType.Payload$AuthorizationRequest
    type: ActionTypes.Message.AUTHORIZATION_REQUEST
  }
  type AuthorizationRequestAcceptedResponse = {
    payload: lobbyType.Payload$AuthorizationRequestAcceptedResponse
    type: ActionTypes.Message.AUTHORIZATION_REQUEST_ACCEPTED_RESPONSE
  }
  type Avatar = {
    payload: lobbyType.Payload$Avatar
    type: ActionTypes.Message.AVATAR
  }
  type HumanPlayerSelectionPage = {
    payload: lobbyType.Payload$HumanPlayerSelectionPage
    type: ActionTypes.Message.HUMAN_PLAYER_SELECTION_PAGE
  }
  type Lobby = {
    payload: lobbyType.Payload$Lobby
    type: ActionTypes.Message.LOBBY
  }
  type OnymousAudienceSelectionPage = {
    payload: lobbyType.Payload$OnymousAudienceSelectionPage
    type: ActionTypes.Message.ONYMOUS_AUDIENCE_SELECTION_PAGE
  }
  type Ping = {
    payload: lobbyType.Payload$Ping
    type: ActionTypes.Message.PING
  }
  type Played = {
    payload: lobbyType.Payload$Played
    type: ActionTypes.Message.PLAYED
  }
  type RobotPlayerSelectionPage = {
    payload: lobbyType.Payload$RobotPlayerSelectionPage
    type: ActionTypes.Message.ROBOT_PLAYER_SELECTION_PAGE
  }
  type SearchResult = {
    payload: lobbyType.Payload$SearchResult
    type: ActionTypes.Message.SEARCH_RESULT
  }
  type Settings = {
    payload: lobbyType.Payload$Settings
    type: ActionTypes.Message.SETTINGS
  }
  type WaitingPage = {
    payload: lobbyType.Payload$WaitingPage
    type: ActionTypes.Message.WAITING_PAGE
  }
}

const authorizationRequest = (payload: lobbyType.Payload): Message.AuthorizationRequest => ({
  payload: payload as lobbyType.Payload$AuthorizationRequest,
  type: ActionTypes.Message.AUTHORIZATION_REQUEST
})
const authorizationRequestAcceptedResponse = (payload: lobbyType.Payload): Message.AuthorizationRequestAcceptedResponse => ({
  payload: payload as lobbyType.Payload$AuthorizationRequestAcceptedResponse,
  type: ActionTypes.Message.AUTHORIZATION_REQUEST_ACCEPTED_RESPONSE
})
const avatar = (payload: lobbyType.Payload): Message.Avatar => ({
  payload: payload as lobbyType.Payload$Avatar,
  type: ActionTypes.Message.AVATAR
})
const humanPlayerSelectionPage = (payload: lobbyType.Payload): Message.HumanPlayerSelectionPage => ({
  payload: payload as lobbyType.Payload$HumanPlayerSelectionPage,
  type: ActionTypes.Message.HUMAN_PLAYER_SELECTION_PAGE
})
const lobby = (payload: lobbyType.Payload): Message.Lobby => ({
  payload: payload as lobbyType.Payload$Lobby,
  type: ActionTypes.Message.LOBBY
})
const onymousAudienceSelectionPage = (payload: lobbyType.Payload): Message.OnymousAudienceSelectionPage => ({
  payload: payload as lobbyType.Payload$OnymousAudienceSelectionPage,
  type: ActionTypes.Message.ONYMOUS_AUDIENCE_SELECTION_PAGE
})
const ping = (payload: lobbyType.Payload): Message.Ping => ({
  payload: payload as lobbyType.Payload$Ping,
  type: ActionTypes.Message.PING
})
const played = (payload: lobbyType.Payload): Message.Played => ({
  payload: payload as lobbyType.Payload$Played,
  type: ActionTypes.Message.PLAYED
})
const robotPlayerSelectionPage = (payload: lobbyType.Payload): Message.RobotPlayerSelectionPage => ({
  payload: payload as lobbyType.Payload$RobotPlayerSelectionPage,
  type: ActionTypes.Message.ROBOT_PLAYER_SELECTION_PAGE
})
const searchResult = (payload: lobbyType.Payload): Message.SearchResult => ({
  payload: payload as lobbyType.Payload$SearchResult,
  type: ActionTypes.Message.SEARCH_RESULT
})
const settings = (payload: lobbyType.Payload): Message.Settings => ({
  payload: payload as lobbyType.Payload$Settings,
  type: ActionTypes.Message.SETTINGS
})
const waitingPage = (payload: lobbyType.Payload): Message.WaitingPage => ({
  payload: payload as lobbyType.Payload$WaitingPage,
  type: ActionTypes.Message.WAITING_PAGE
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
