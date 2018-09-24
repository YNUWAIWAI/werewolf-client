// @flow
export const SOCKET_OPEN = 'SOCKET:OPEN'
export const SOCKET_CLOSE = 'SOCKET:CLOSE'
export const SOCKET_INIT = 'SOCKET:INIT'
export const SOCKET_MESSAGE = 'SOCKET:MESSAGE'
export const SOCKET_ERROR = 'SOCKET:ERROR'
export const SOCKET_SEND = 'SOCKET:SEND'

export const CHANGE_LOBBY = 'CHANGE_LOBBY'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'
export const CHANGE_VILLAGE_NAME = 'CHANGE_VILLAGE_NAME'
export const KICK_OUT_PLAYER = 'KICK_OUT_PLAYER'
export const SELECT_VILLAGE = 'SELECT_VILLAGE'

export const ADVANCED_SEARCH = 'ADVANCED_SEARCH'
export const BUILD_VILLAGE = 'BUILD_VILLAGE'
export const ID_SEARCH = 'ID_SEARCH'
export const LEAVE_WAITING_PAGE = 'LEAVE_WAITING_PAGE'
export const PLAY_GAME = 'PLAY_GAME'
export const REFRESH = 'REFRESH'
export const SHOW_ADVANCED_SEARCH = 'SHOW_ADVANCED_SEARCH'
export const SHOW_BUILD_VILLAGE = 'SHOW_BUILD_VILLAGE'
export const SHOW_CONNECTING_TO_ROBOT_PLAYER = 'SHOW_CONNECTING_TO_ROBOT_PLAYER'
export const SHOW_HISTORY = 'SHOW_HISTORY'
export const SHOW_ID_SEARCH = 'SHOW_ID_SEARCH'
export const SHOW_LOBBY_FOR_AUDIENCE = 'SHOW_LOBBY_FOR_AUDIENCE'
export const SHOW_LOBBY_FOR_HUMAN_PLAYER = 'SHOW_LOBBY_FOR_HUMAN_PLAYER'
export const SHOW_LOBBY_FOR_ROBOT_PLAYER = 'SHOW_LOBBY_FOR_ROBOT_PLAYER'
export const SHOW_MAIN = 'SHOW_MAIN'
export const SHOW_SETTINGS = 'SHOW_SETTINGS'

export const advancedSearch = {
  CHANGE_AVATAR: 'advancedSearch/CHANGE_AVATAR',
  CHANGE_CHECKBOX: 'advancedSearch/CHANGE_CHECKBOX',
  CHANGE_COMMENT: 'advancedSearch/CHANGE_COMMENT',
  CHANGE_HOST_NAME: 'advancedSearch/CHANGE_HOST_NAME',
  CHANGE_MAXIMUM: 'advancedSearch/CHANGE_MAXIMUM',
  CHANGE_MINIMUM: 'advancedSearch/CHANGE_MINIMUM',
  CHANGE_VALIDITY: 'advancedSearch/CHANGE_VALIDITY',
  CHANGE_VILLAGE_NAME: 'advancedSearch/CHANGE_VILLAGE_NAME'
}
export const buildVillage = {
  CHANGE_AVATAR: 'buildVillage/CHANGE_AVATAR',
  CHANGE_COMMENT: 'buildVillage/CHANGE_COMMENT',
  CHANGE_HOST_NAME: 'buildVillage/CHANGE_HOST_NAME',
  CHANGE_MEMBER: 'buildVillage/CHANGE_MEMBER',
  CHANGE_NUMBER_OF_PLAYERS: 'buildVillage/CHANGE_NUMBER_OF_PLAYERS',
  CHANGE_NUMBER_OF_ROBOTS: 'buildVillage/CHANGE_NUMBER_OF_ROBOTS',
  CHANGE_VALIDITY: 'buildVillage/CHANGE_VALIDITY',
  CHANGE_VILLAGE_NAME: 'buildVillage/CHANGE_VILLAGE_NAME'
}
export const idSearch = {
  CHANGE_SEARCH_ID: 'idSearch/CHANGE_SEARCH_ID',
  CHANGE_VALIDITY: 'idSearch/CHANGE_VALIDITY'
}
export const indexedDB = {
  ABORT: 'indexedDB/ABORT',
  BLOCKED: 'indexedDB/BLOCKED',
  CLOSE: 'indexedDB/CLOSE',
  COMPLETE: 'indexedDB/COMPLETE',
  ERROR: 'indexedDB/ERROR',
  INIT: 'indexedDB/INIT',
  SUCCESS: 'indexedDB/SUCCESS',
  UPGRADE_NEEDED: 'indexedDB/UPGRADE_NEEDED',
  VERSION_CHANGE: 'indexedDB/VERSION_CHANGE'
}
