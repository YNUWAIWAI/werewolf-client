export const enum global {
  ADVANCED_SEARCH = 'ADVANCED_SEARCH',
  BUILD_VILLAGE = 'BUILD_VILLAGE',
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_LOBBY = 'CHANGE_LOBBY',
  CHANGE_TOKEN = 'CHANGE_TOKEN',
  CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL',
  CHANGE_USER_NAME = 'CHANGE_USER_NAME',
  CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD',
  CHANGE_VILLAGE_NAME = 'CHANGE_VILLAGE_NAME',
  CONFIRM_KICK_OUT_PLAYER = 'CONFIRM_KICK_OUT_PLAYER',
  ID_SEARCH = 'ID_SEARCH',
  KICK_OUT_PLAYER = 'KICK_OUT_PLAYER',
  LEAVE_WAITING_PAGE = 'LEAVE_WAITING_PAGE',
  LOGOUT = 'LOGOUT',
  PLAY_GAME = 'PLAY_GAME',
  REFRESH = 'REFRESH',
  SELECT_NO = 'SELECT_NO',
  SELECT_VILLAGE = 'SELECT_VILLAGE',
  SELECT_YES = 'SELECT_YES',
  SHOW_ADVANCED_SEARCH = 'SHOW_ADVANCED_SEARCH',
  SHOW_BUILD_VILLAGE = 'SHOW_BUILD_VILLAGE',
  SHOW_CONNECTING_TO_ROBOT_PLAYER = 'SHOW_CONNECTING_TO_ROBOT_PLAYER',
  SHOW_CREDITS = 'SHOW_CREDITS',
  SHOW_HISTORY = 'SHOW_HISTORY',
  SHOW_HOW_TO_PLAY = 'SHOW_HOW_TO_PLAY',
  SHOW_ID_SEARCH = 'SHOW_ID_SEARCH',
  SHOW_LOBBY_FOR_AUDIENCE = 'SHOW_LOBBY_FOR_AUDIENCE',
  SHOW_LOBBY_FOR_HUMAN_PLAYER = 'SHOW_LOBBY_FOR_HUMAN_PLAYER',
  SHOW_LOBBY_FOR_ROBOT_PLAYER = 'SHOW_LOBBY_FOR_ROBOT_PLAYER',
  SHOW_MAIN = 'SHOW_MAIN',
  SHOW_SETTINGS = 'SHOW_SETTINGS'
}
export const enum advancedSearch {
  CHANGE_AVATAR = 'advancedSearch/CHANGE_AVATAR',
  CHANGE_CHECKBOX = 'advancedSearch/CHANGE_CHECKBOX',
  CHANGE_COMMENT = 'advancedSearch/CHANGE_COMMENT',
  CHANGE_HOST_NAME = 'advancedSearch/CHANGE_HOST_NAME',
  CHANGE_MAXIMUM = 'advancedSearch/CHANGE_MAXIMUM',
  CHANGE_MINIMUM = 'advancedSearch/CHANGE_MINIMUM',
  CHANGE_VALIDITY = 'advancedSearch/CHANGE_VALIDITY',
  CHANGE_VILLAGE_NAME = 'advancedSearch/CHANGE_VILLAGE_NAME'
}
export const enum buildVillage {
  CHANGE_AVATAR = 'buildVillage/CHANGE_AVATAR',
  CHANGE_COMMENT = 'buildVillage/CHANGE_COMMENT',
  CHANGE_HOST_NAME = 'buildVillage/CHANGE_HOST_NAME',
  CHANGE_MEMBER = 'buildVillage/CHANGE_MEMBER',
  CHANGE_NUMBER_OF_PLAYERS = 'buildVillage/CHANGE_NUMBER_OF_PLAYERS',
  CHANGE_NUMBER_OF_ROBOTS = 'buildVillage/CHANGE_NUMBER_OF_ROBOTS',
  CHANGE_VALIDITY = 'buildVillage/CHANGE_VALIDITY',
  CHANGE_VILLAGE_NAME = 'buildVillage/CHANGE_VILLAGE_NAME'
}
export const enum idSearch {
  CHANGE_SEARCH_ID = 'idSearch/CHANGE_SEARCH_ID',
  CHANGE_VALIDITY = 'idSearch/CHANGE_VALIDITY'
}
export const enum indexedDB {
  ABORT = 'indexedDB/ABORT',
  BLOCKED = 'indexedDB/BLOCKED',
  CLOSE = 'indexedDB/CLOSE',
  COMPLETE = 'indexedDB/COMPLETE',
  ERROR = 'indexedDB/ERROR',
  INIT = 'indexedDB/INIT',
  SUCCESS = 'indexedDB/SUCCESS',
  UPGRADE_NEEDED = 'indexedDB/UPGRADE_NEEDED',
  VERSION_CHANGE = 'indexedDB/VERSION_CHANGE'
}
export const enum socket {
  CLOSE = 'socket/CLOSE',
  ERROR = 'socket/ERROR',
  INIT = 'socket/INIT',
  MESSAGE = 'socket/MESSAGE',
  OPEN = 'socket/OPEN',
  SEND = 'socket/SEND'
}
export const enum Target {
  ADVANCED_SEARCH = global.ADVANCED_SEARCH,
  BUILD_VILLAGE = global.BUILD_VILLAGE,
  CONFIRM_KICK_OUT_PLAYER = global.BUILD_VILLAGE,
  ID_SEARCH = global.ID_SEARCH,
  LEAVE_WAITING_PAGE = global.LEAVE_WAITING_PAGE,
  PLAY_GAME = global.PLAY_GAME,
  REFRESH = global.REFRESH,
  SHOW_ADVANCED_SEARCH = global.SHOW_ADVANCED_SEARCH,
  SHOW_BUILD_VILLAGE = global.SHOW_BUILD_VILLAGE,
  SHOW_CREDITS = global.SHOW_CREDITS,
  SHOW_CONNECTING_TO_ROBOT_PLAYER = global.SHOW_CONNECTING_TO_ROBOT_PLAYER,
  SHOW_HISTORY = global.SHOW_HISTORY,
  SHOW_HOW_TO_PLAY = global.SHOW_HOW_TO_PLAY,
  SHOW_ID_SEARCH = global.SHOW_ID_SEARCH,
  SHOW_LOBBY_FOR_AUDIENCE = global.SHOW_LOBBY_FOR_AUDIENCE,
  SHOW_LOBBY_FOR_HUMAN_PLAYER = global.SHOW_LOBBY_FOR_HUMAN_PLAYER,
  SHOW_LOBBY_FOR_ROBOT_PLAYER = global.SHOW_LOBBY_FOR_ROBOT_PLAYER,
  SHOW_MAIN = global.SHOW_MAIN,
  SHOW_SETTINGS = global.SHOW_SETTINGS
}
export const enum Scope {
  advancedSearch = 'advancedSearch',
  buildVillage = 'buildVillage',
  idSearch = 'idSearch',
  indexedDB = 'indexedDB',
  socket = 'socket'
}

