import {
  BoardMessage,
  ChatMessage,
  ErrorMessage,
  FlavorTextMessage,
  NextGameInvitation,
  NextGameInvitationIsClosed,
  ReceivedChatMessage,
  ReceivedFlavorTextMessage,
  ReceivedSystemMessage,
  ScrollMessage,
  StarMessage,
  SystemMessage,
  VoteMessage
} from '../schema'
import {
  BuildVillage,
  LeaveWaitingPage,
  Ready
} from '../../lobby/schema'

export const enum Message {
  boardMessage = 'boardMessage',
  chatMessage = 'chatMessage',
  errorMessage = 'errorMessage',
  flavorTextMessage = 'flavorTextMessage',
  scrollMessage = 'scrollMessage',
  starMessage = 'starMessage',
  systemMessage = 'systemMessage',
  voteMessage = 'voteMessage',
}
export const enum PayloadType {
  buildVillage = 'buildVillage',
  leaveWaitingPage = 'leaveWaitingPage',
  nextGameInvitation = 'nextGameInvitation',
  nextGameInvitationIsClosed = 'nextGameInvitationIsClosed',
  ready = 'ready',
  receivedChatMessage = 'receivedChatMessage',
  receivedFlavorTextMessage = 'receivedFlavorTextMessage',
  receivedSystemMessage = 'receivedSystemMessage'
}
export type Payload =
  | Payload$BoardMessage
  | Payload$BuildVillage
  | Payload$ChatMessage
  | Payload$ErrorMessage
  | Payload$FlavorTextMessage
  | Payload$LeaveWaitingPage
  | Payload$NextGameInvitation
  | Payload$NextGameInvitationIsClosed
  | Payload$Ready
  | Payload$ReceivedChatMessage
  | Payload$ReceivedFlavorTextMessage
  | Payload$ReceivedSystemMessage
  | Payload$ScrollMessage
  | Payload$StarMessage
  | Payload$SystemMessage
  | Payload$VoteMessage
export interface PayloadBase {
  '@id'?: string
  'type'?: PayloadType
}
export interface Payload$BoardMessage extends BoardMessage {}
export interface Payload$BuildVillage extends BuildVillage {
  '@id'?: undefined
}
export interface Payload$ChatMessage extends ChatMessage {}
export interface Payload$ErrorMessage extends ErrorMessage {}
export interface Payload$FlavorTextMessage extends FlavorTextMessage {}
export interface Payload$LeaveWaitingPage extends LeaveWaitingPage {
  '@id'?: undefined
}
export interface Payload$Ready extends Ready {
  '@id'?: undefined
}
export interface Payload$NextGameInvitation extends NextGameInvitation {
  '@id'?: undefined
}
export interface Payload$NextGameInvitationIsClosed extends NextGameInvitationIsClosed {
  '@id'?: undefined
}
export interface Payload$ReceivedChatMessage extends ReceivedChatMessage {
  '@id'?: undefined
}
export interface Payload$ReceivedFlavorTextMessage extends ReceivedFlavorTextMessage {
  '@id'?: undefined
}
export interface Payload$ReceivedSystemMessage extends ReceivedSystemMessage {
  '@id'?: undefined
}
export interface Payload$ScrollMessage extends ScrollMessage {}
export interface Payload$StarMessage extends StarMessage {}
export interface Payload$SystemMessage extends SystemMessage {}
export interface Payload$VoteMessage extends VoteMessage {}
