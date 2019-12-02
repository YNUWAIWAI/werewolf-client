import {Message} from '../constants/ActionTypes'
import {village} from '../types'

export type Message$BoardMessage = {
  payload: village.Payload$BoardMessage
  type: Message.BoardMessage
}
const boardMessage = (payload: village.Payload): Message$BoardMessage => ({
  payload: payload as village.Payload$BoardMessage,
  type: Message.BoardMessage
})

export type Message$ErrorMessage = {
  payload: village.Payload$ErrorMessage
  type: Message.ErrorMessage
}
const errorMessage = (payload: village.Payload): Message$ErrorMessage => ({
  payload: payload as village.Payload$ErrorMessage,
  type: Message.ErrorMessage
})

export type Message$FlavorTextMessage = {
  payload: village.Payload$FlavorTextMessage
  type: Message.FlavorTextMessage
}
const flavorTextMessage = (payload: village.Payload): Message$FlavorTextMessage => ({
  payload: payload as village.Payload$FlavorTextMessage,
  type: Message.FlavorTextMessage
})

export type Message$NextGameInvitation = {
  payload: village.Payload$NextGameInvitation
  type: Message.NextGameInvitation
}
const nextGameInvitation = (payload: village.Payload): Message$NextGameInvitation => ({
  payload: payload as village.Payload$NextGameInvitation,
  type: Message.NextGameInvitation
})

export type Message$NextGameInvitationIsClosed = {
  payload: village.Payload$NextGameInvitationIsClosed
  type: Message.NextGameInvitationIsClosed
}
const nextGameInvitationIsClosed = (payload: village.Payload): Message$NextGameInvitationIsClosed => ({
  payload: payload as village.Payload$NextGameInvitationIsClosed,
  type: Message.NextGameInvitationIsClosed
})

export type Message$ScrollMessage = {
  payload: village.Payload$ScrollMessage
  type: Message.ScrollMessage
}
const scrollMessage = (payload: village.Payload): Message$ScrollMessage => ({
  payload: payload as village.Payload$ScrollMessage,
  type: Message.ScrollMessage
})

export type Message$SystemMessage = {
  payload: village.Payload$SystemMessage
  type: Message.SystemMessage
}
const systemMessage = (payload: village.Payload): Message$SystemMessage => ({
  payload: payload as village.Payload$SystemMessage,
  type: Message.SystemMessage
})

export type Message$VoteMessage = {
  payload: village.Payload$VoteMessage
  type: Message.VoteMessage
}
const voteMessage = (payload: village.Payload): Message$VoteMessage => ({
  payload: payload as village.Payload$VoteMessage,
  type: Message.VoteMessage
})

export type Message$ChatMessage = {
  payload: village.Payload$ChatMessage
  type: Message.ChatMessage
}
const chatMessage = (payload: village.Payload): Message$ChatMessage => ({
  payload: payload as village.Payload$ChatMessage,
  type: Message.ChatMessage
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
