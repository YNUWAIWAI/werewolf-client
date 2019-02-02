export const enum global {
  CHANGE_PREDICTION_BOARD = 'CHANGE_PREDICTION_BOARD',
  CHANGE_DATE = 'CHANGE_DATE',
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_PHASE = 'CHANGE_PHASE',
  CLICK_HIDE_BUTTON = 'CLICK_HIDE_BUTTON',
  GET_PLAYER_ROLE = 'GET_PLAYER_ROLE',
  HIDE_RESULT = 'HIDE_RESULT',
  PLAYED = 'PLAYED',
  PROLOGUE = 'PROLOGUE',
  POST_CHAT = 'POST_CHAT',
  READY = 'READY',
  RETURN_TO_LOBBY = 'RETURN_TO_LOBBY',
  SELECT_NO = 'SELECT_NO',
  SELECT_OPTION = 'SELECT_OPTION',
  SELECT_YES = 'SELECT_YES',
  SET_DAY = 'SET_DAY',
  SET_ROLE = 'SET_ROLE',
  SHOW_RESULT = 'SHOW_RESULT',
  TICK = 'TICK'
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
export const enum Scope {
  indexedDB = 'indexedDB',
  socket = 'socket'
}
export const enum Navigation {
  NEXT_GAME = 'NEXT_GAME',
  RETURN_TO_LOBBY = 'RETURN_TO_LOBBY',
  SHOW_RESULT = 'SHOW_RESULT'
}

