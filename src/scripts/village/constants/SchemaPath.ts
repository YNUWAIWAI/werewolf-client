import {VERSION} from './Version'

const VILLAGE_BASE = `https://werewolf.world/village/schema/${VERSION}`
const INVITATION = `${VILLAGE_BASE}/invitation`
const invitation = {
  nextGameInvitation: `${INVITATION}/nextGameInvitation.json`,
  nextGameInvitationClosed: `${INVITATION}/nextGameInvitationClosed.json`
}
const RECEIPT = `${VILLAGE_BASE}/receipt`
const receipt = {
  receivedChatMessage: `${RECEIPT}/receivedChatMessage.json`,
  receivedFlavorTextMessage: `${RECEIPT}/receivedFlavorTextMessage.json`,
  receivedSystemMessage: `${RECEIPT}/receivedSystemMessage.json`
}

export const VILLAGE_SCHEMA = {
  allCharacters: `${VILLAGE_BASE}/allCharacters.json`,
  allRoles: `${VILLAGE_BASE}/allRoles.json`,
  avatar: `${VILLAGE_BASE}/avatar.json`,
  base: `${VILLAGE_BASE}/base.json`,
  board: `${VILLAGE_BASE}/board.json`,
  boardMessage: `${VILLAGE_BASE}/boardMessage.json`,
  boardResult: `${VILLAGE_BASE}/boardResult.json`,
  character: `${VILLAGE_BASE}/character.json`,
  chat: `${VILLAGE_BASE}/chat.json`,
  chatMessage: `${VILLAGE_BASE}/chatMessage.json`,
  chatSettings: `${VILLAGE_BASE}/chatSettings.json`,
  error: `${VILLAGE_BASE}/error.json`,
  errorMessage: `${VILLAGE_BASE}/errorMessage.json`,
  flavorTextMessage: `${VILLAGE_BASE}/flavorTextMessage.json`,
  invitation,
  receipt,
  role: `${VILLAGE_BASE}/role.json`,
  scroll: `${VILLAGE_BASE}/scroll.json`,
  scrollMessage: `${VILLAGE_BASE}/scrollMessage.json`,
  star: `${VILLAGE_BASE}/star.json`,
  starMessage: `${VILLAGE_BASE}/starMessage.json`,
  systemMessage: `${VILLAGE_BASE}/systemMessage.json`,
  time: `${VILLAGE_BASE}/time.json`,
  village: `${VILLAGE_BASE}/village.json`,
  voteMessage: `${VILLAGE_BASE}/voteMessage.json`,
  votingResult: `${VILLAGE_BASE}/votingResult.json`
}
export {LOBBY_SCHEMA} from '../../lobby/constants/SchemaPath'
