import {
  BoardMessage,
  ChatMessage,
  ErrorMessage,
  FlavorTextMessage,
  Message,
  PayloadType,
  ScrollMessage,
  StarMessage,
  SystemMessage,
  VoteMessage
} from '..'
import {
  BuildVillage,
  LeaveWaitingPage,
  Ready
} from '../../lobby'

export type Payload =
  | Payload$BoardMessage
  | Payload$BuildVillage
  | Payload$ChatMessage
  | Payload$ErrorMessage
  | Payload$FlavorTextMessage
  | Payload$LeaveWaitingPage
  // | Payload$nextGameInvitation
  // | Payload$nextGameInvitationIsClosed
  | Payload$Ready
  // | Payload$receivedFlavorTextMessage
  // | Payload$receivedPlayerMessage
  // | Payload$receivedSystemMessage
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
export interface Payload$BuildVillage extends BuildVillage {}
export interface Payload$ChatMessage extends ChatMessage {
  '@payload'?: Message.chatMessage
}
export interface Payload$ErrorMessage extends ErrorMessage {
  '@payload'?: Message.errorMessage
}
export interface Payload$FlavorTextMessage extends FlavorTextMessage {
  '@payload'?: Message.flavorTextMessage
}
export interface Payload$LeaveWaitingPage extends LeaveWaitingPage {}
export interface Payload$Ready extends Ready {}
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
