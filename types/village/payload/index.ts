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
  '@payload'?: Message | PayloadType
  'type'?: PayloadType
}
export interface Payload$BoardMessage extends BoardMessage {
  '@payload'?: Message.boardMessage
}
export interface Payload$BuildVillage extends BuildVillage {
  '@id'?: undefined
  '@payload'?: PayloadType.buildVillage
}
export interface Payload$ChatMessage extends ChatMessage {
  '@payload'?: Message.chatMessage
}
export interface Payload$ErrorMessage extends ErrorMessage {
  '@payload'?: Message.errorMessage
}
export interface Payload$FlavorTextMessage extends FlavorTextMessage {
  '@payload'?: Message.flavorTextMessage
}
export interface Payload$LeaveWaitingPage extends LeaveWaitingPage {
  '@id'?: undefined
  '@payload'?: PayloadType.leaveWaitingPage
}
export interface Payload$Ready extends Ready {
  '@id'?: undefined
  '@payload'?: PayloadType.ready
}
export interface Payload$NextGameInvitation extends NextGameInvitation {
  '@id'?: undefined
  '@payload'?: PayloadType.nextGameInvitation
}
export interface Payload$NextGameInvitationIsClosed extends NextGameInvitationIsClosed {
  '@id'?: undefined
  '@payload'?: PayloadType.nextGameInvitationIsClosed
}
export interface Payload$ReceivedChatMessage extends ReceivedChatMessage {
  '@id'?: undefined
  '@payload'?: PayloadType.receivedChatMessage
}
export interface Payload$ReceivedFlavorTextMessage extends ReceivedFlavorTextMessage {
  '@id'?: undefined
  '@payload'?: PayloadType.receivedFlavorTextMessage
}
export interface Payload$ReceivedSystemMessage extends ReceivedSystemMessage {
  '@id'?: undefined
  '@payload'?: PayloadType.receivedSystemMessage
}
export interface Payload$ScrollMessage extends ScrollMessage {
  '@payload'?: Message.scrollMessage
}
export interface Payload$StarMessage extends StarMessage {
  '@payload'?: Message.starMessage
}
export interface Payload$SystemMessage extends SystemMessage {
  '@payload'?: Message.systemMessage
}
export interface Payload$VoteMessage extends VoteMessage {
  '@payload'?: Message.voteMessage
}
