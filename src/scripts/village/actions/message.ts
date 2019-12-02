import {Message} from '../constants/ActionTypes'
import {village} from '../types'

export type Message$BoardMessage = {
  payload: village.Payload$BoardMessage
  type: Message.BOARD_MESSAGE
}
const boardMessage = (payload: village.Payload): Message$BoardMessage => ({
  payload: payload as village.Payload$BoardMessage,
  type: Message.BOARD_MESSAGE
})

export type Message$ErrorMessage = {
  payload: village.Payload$ErrorMessage
  type: Message.ERROR_MESSAGE
}
const errorMessage = (payload: village.Payload): Message$ErrorMessage => ({
  payload: payload as village.Payload$ErrorMessage,
  type: Message.ERROR_MESSAGE
})

export type Message$FlavorTextMessage = {
  payload: village.Payload$FlavorTextMessage
  type: Message.FLAVOR_TEXT_MESSAGE
}
const flavorTextMessage = (payload: village.Payload): Message$FlavorTextMessage => ({
  payload: payload as village.Payload$FlavorTextMessage,
  type: Message.FLAVOR_TEXT_MESSAGE
})

export type Message$NextGameInvitation = {
  payload: village.Payload$NextGameInvitation
  type: Message.NEXT_GAME_INVITATION
}
const nextGameInvitation = (payload: village.Payload): Message$NextGameInvitation => ({
  payload: payload as village.Payload$NextGameInvitation,
  type: Message.NEXT_GAME_INVITATION
})

export type Message$NextGameInvitationIsClosed = {
  payload: village.Payload$NextGameInvitationIsClosed
  type: Message.NEXT_GAME_INVITATION_IS_CLOSED
}
const nextGameInvitationIsClosed = (payload: village.Payload): Message$NextGameInvitationIsClosed => ({
  payload: payload as village.Payload$NextGameInvitationIsClosed,
  type: Message.NEXT_GAME_INVITATION_IS_CLOSED
})

export type Message$ScrollMessage = {
  payload: village.Payload$ScrollMessage
  type: Message.SCROLL_MESSAGE
}
const scrollMessage = (payload: village.Payload): Message$ScrollMessage => ({
  payload: payload as village.Payload$ScrollMessage,
  type: Message.SCROLL_MESSAGE
})

export type Message$SystemMessage = {
  payload: village.Payload$SystemMessage
  type: Message.SYSTEM_MESSAGE
}
const systemMessage = (payload: village.Payload): Message$SystemMessage => ({
  payload: payload as village.Payload$SystemMessage,
  type: Message.SYSTEM_MESSAGE
})

export type Message$VoteMessage = {
  payload: village.Payload$VoteMessage
  type: Message.VOTE_MESSAGE
}
const voteMessage = (payload: village.Payload): Message$VoteMessage => ({
  payload: payload as village.Payload$VoteMessage,
  type: Message.VOTE_MESSAGE
})

export type Message$ChatMessage = {
  payload: village.Payload$ChatMessage
  type: Message.CHAT_MESSAGE
}
const chatMessage = (payload: village.Payload): Message$ChatMessage => ({
  payload: payload as village.Payload$ChatMessage,
  type: Message.CHAT_MESSAGE
})

export const message = {
  boardMessage,
  chatMessage,
  errorMessage,
  flavorTextMessage,
  nextGameInvitation,
  nextGameInvitationIsClosed,
  scrollMessage,
  systemMessage,
  voteMessage
}
