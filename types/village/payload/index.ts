import {
  BoardMessage,
  ChatMessage,
  ErrorMessage,
  FlavorTextMessage,
  ScrollMessage,
  StarMessage,
  SystemMessage,
  VoteMessage
} from '../schema'
import {
  Message,
  PayloadType
} from '..'

export type Payload =
  // | Payload$buildVillage
  | Payload$BoardMessage
  | Payload$ErrorMessage
  | Payload$FlavorTextMessage
  // | Payload$leaveWaitingPage
  | Payload$ChatMessage
  // | Payload$nextGameInvitation
  // | Payload$nextGameInvitationIsClosed
  // | Payload$ready
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
export interface Payload$ErrorMessage extends ErrorMessage {
  '@payload'?: Message.errorMessage
}
export interface Payload$FlavorTextMessage extends FlavorTextMessage {
  '@payload'?: Message.flavorTextMessage
}
export interface Payload$ChatMessage extends ChatMessage {
  '@payload'?: Message.chatMessage
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
