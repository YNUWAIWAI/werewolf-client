import {
  BoardMessage,
  ChatMessage,
  ErrorMessage,
  FlavorTextMessage,
  Message,
  NextGameInvitation,
  NextGameInvitationIsClosed,
  PayloadType,
  ReceivedFlavorTextMessage,
  ReceivedPlayerMessage,
  ReceivedSystemMessage,
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
  | Payload$NextGameInvitation
  | Payload$NextGameInvitationIsClosed
  | Payload$Ready
  | Payload$ReceivedFlavorTextMessage
  | Payload$ReceivedPlayerMessage
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
export interface Payload$NextGameInvitation extends NextGameInvitation {}
export interface Payload$NextGameInvitationIsClosed extends NextGameInvitationIsClosed {}
export interface Payload$ReceivedFlavorTextMessage extends ReceivedFlavorTextMessage {}
export interface Payload$ReceivedPlayerMessage extends ReceivedPlayerMessage {}
export interface Payload$ReceivedSystemMessage extends ReceivedSystemMessage {}
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
