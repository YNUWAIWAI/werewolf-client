import * as ActionTypes from '../constants/ActionTypes'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: ActionTypes.socket.CLOSE} => ({
    event,
    type: ActionTypes.socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: ActionTypes.socket.ERROR} => ({
    event,
    type: ActionTypes.socket.ERROR
  }),
  message: (event: MessageEvent): {payload: lobby.Payload, type: ActionTypes.socket.MESSAGE} => ({
    payload: JSON.parse(event.data),
    type: ActionTypes.socket.MESSAGE
  }),
  open: (event: Event): {event: Event, type: ActionTypes.socket.OPEN} => ({
    event,
    type: ActionTypes.socket.OPEN
  }),
  send: (payload: Object): {payload: Object, type: ActionTypes.socket.SEND} => ({
    payload,
    type: ActionTypes.socket.SEND
  })
}
export const changeAvatar = (scope: 'advancedSearch' | 'buildVillage') => (avatar: lobby.Avatar): {avatar: lobby.Avatar, type: ActionTypes.advancedSearch.CHANGE_AVATAR | ActionTypes.buildVillage.CHANGE_AVATAR} => ({
  avatar,
  type: ActionTypes[scope].CHANGE_AVATAR
})
export const changeCheckbox = (scope: 'advancedSearch') => (propName: string) => (checked: boolean): {propName: string, checked: boolean, type: ActionTypes.advancedSearch.CHANGE_CHECKBOX} => ({
  checked,
  propName,
  type: ActionTypes[scope].CHANGE_CHECKBOX
})
export const changeComment = (scope: 'advancedSearch' | 'buildVillage') => (comment: string): {comment: string, type: ActionTypes.advancedSearch.CHANGE_COMMENT | ActionTypes.buildVillage.CHANGE_COMMENT} => ({
  comment,
  type: ActionTypes[scope].CHANGE_COMMENT
})
export const changeHostName = (scope: 'advancedSearch' | 'buildVillage') => (hostName: string): {hostName: string, type: ActionTypes.advancedSearch.CHANGE_HOST_NAME | ActionTypes.buildVillage.CHANGE_HOST_NAME} => ({
  hostName,
  type: ActionTypes[scope].CHANGE_HOST_NAME
})
export const changeLanguage = (language: lobby.Language): {language: lobby.Language, type: ActionTypes.global.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.global.CHANGE_LANGUAGE
})
export const changeLobby = (lobby: lobby.Lobby): {lobby: lobby.Lobby, type: ActionTypes.global.CHANGE_LOBBY} => ({
  lobby,
  type: ActionTypes.global.CHANGE_LOBBY
})
export const changeMaximum = (scope: 'advancedSearch') => (maximum: number): {maximum: number, type: ActionTypes.advancedSearch.CHANGE_MAXIMUM} => ({
  maximum: Number(maximum),
  type: ActionTypes[scope].CHANGE_MAXIMUM
})
export const changeMember = (scope: 'buildVillage') => (member: lobby.Member): {member: lobby.Member, type: ActionTypes.buildVillage.CHANGE_MEMBER} => ({
  member,
  type: ActionTypes[scope].CHANGE_MEMBER
})
export const changeMinimum = (scope: 'advancedSearch') => (minimum: number): {minimum: number, type: ActionTypes.advancedSearch.CHANGE_MINIMUM} => ({
  minimum: Number(minimum),
  type: ActionTypes[scope].CHANGE_MINIMUM
})
export const changeNumberOfPlayers = (scope: 'buildVillage') => (numberOfPlayers: number): {numberOfPlayers: number, type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS} => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (scope: 'buildVillage') => (numberOfRobots: number): {numberOfRobots: number, type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_ROBOTS} => ({
  numberOfRobots: Number(numberOfRobots),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_ROBOTS
})
export const changeSearchId = (id: number): {id: number, type: ActionTypes.idSearch.CHANGE_SEARCH_ID} => ({
  id,
  type: ActionTypes.idSearch.CHANGE_SEARCH_ID
})
export const changeToken = ({lobby, token}: {lobby: lobby.Lobby, token: string}): {lobby: lobby.Lobby, token: string, type: ActionTypes.global.CHANGE_TOKEN} => ({
  lobby,
  token,
  type: ActionTypes.global.CHANGE_TOKEN
})
export const changeUserEmail = (userEmail: string): {userEmail: string, type: ActionTypes.global.CHANGE_USER_EMAIL} => ({
  type: ActionTypes.global.CHANGE_USER_EMAIL,
  userEmail
})
export const changeUserName = (userName: string): {userName: string, type: ActionTypes.global.CHANGE_USER_NAME} => ({
  type: ActionTypes.global.CHANGE_USER_NAME,
  userName
})
export const changeUserPassword = (userPassword: string): {userPassword: string, type: ActionTypes.global.CHANGE_USER_PASSWORD} => ({
  type: ActionTypes.global.CHANGE_USER_PASSWORD,
  userPassword
})
export const changeValidity = (scope: 'advancedSearch' | 'buildVillage' | 'idSearch') => (propName: string) => (validity: boolean): {propName: string, type: ActionTypes.advancedSearch.CHANGE_VALIDITY | ActionTypes.buildVillage.CHANGE_VALIDITY | ActionTypes.idSearch.CHANGE_VALIDITY, validity: boolean} => ({
  propName,
  type: ActionTypes[scope].CHANGE_VALIDITY,
  validity
})
export const changeVillageName = (scope: 'advancedSearch' | 'buildVillage') => (villageName: string): {type: ActionTypes.advancedSearch.CHANGE_VILLAGE_NAME | ActionTypes.buildVillage.CHANGE_VILLAGE_NAME, villageName: string} => ({
  type: ActionTypes[scope].CHANGE_VILLAGE_NAME,
  villageName
})
export const kickOutPlayer = (token: lobby.Token): {token: lobby.Token, type: ActionTypes.global.KICK_OUT_PLAYER} => ({
  token,
  type: ActionTypes.global.KICK_OUT_PLAYER
})
export const selectVillage = (id: number): {id: number, type: ActionTypes.global.SELECT_VILLAGE} => ({
  id,
  type: ActionTypes.global.SELECT_VILLAGE
})
export const transition = (target: lobby.Target): {type: lobby.Target} => ({
  type: target
})

export type SocketClose = ReturnType<typeof socket.close>
export type SocketError = ReturnType<typeof socket.error>
export type SocketMessage = ReturnType<typeof socket.message>
export type SocketOpen = ReturnType<typeof socket.open>
export type SocketSend = ReturnType<typeof socket.send>
export type AdvancedSearch$ChangeAvatar = ReturnType<ReturnType<typeof changeAvatar>>
export type AdvancedSearch$ChangeCheckbox = ReturnType<ReturnType<ReturnType<typeof changeCheckbox>>>
export type AdvancedSearch$ChangeComment = ReturnType<ReturnType<typeof changeComment>>
export type AdvancedSearch$ChangeHostName = ReturnType<ReturnType<typeof changeHostName>>
export type AdvancedSearch$ChangeMaximum = ReturnType<ReturnType<typeof changeMaximum>>
export type AdvancedSearch$ChangeMinimum = ReturnType<ReturnType<typeof changeMinimum>>
export type AdvancedSearch$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type AdvancedSearch$ChangeVillageName = ReturnType<ReturnType<typeof changeVillageName>>
export type BuildVillage$ChangeAvatar = ReturnType<ReturnType<typeof changeAvatar>>
export type BuildVillage$ChangeComment = ReturnType<ReturnType<typeof changeComment>>
export type BuildVillage$ChangeHostName = ReturnType<ReturnType<typeof changeHostName>>
export type BuildVillage$ChangeMember = ReturnType<ReturnType<typeof changeMember>>
export type BuildVillage$ChangeNumberOfPlayers = ReturnType<ReturnType<typeof changeNumberOfPlayers>>
export type BuildVillage$ChangeNumberOfRobots = ReturnType<ReturnType<typeof changeNumberOfRobots>>
export type BuildVillage$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type BuildVillage$ChangeVillageName = ReturnType<ReturnType<typeof changeVillageName>>
export type ChangeLanguage = ReturnType<typeof changeLanguage>
export type ChangeLobby = ReturnType<typeof changeLobby>
export type ChangeToken = ReturnType<typeof changeToken>
export type ChangeUserEmail = ReturnType<typeof changeUserEmail>
export type ChangeUserName = ReturnType<typeof changeUserName>
export type ChangeUserPassword = ReturnType<typeof changeUserPassword>
export type KickOutPlayer = ReturnType<typeof kickOutPlayer>
export type IdSearch$ChangeSearchId = ReturnType<typeof changeSearchId>
export type IdSearch$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type SelectVillage = ReturnType<typeof selectVillage>
export type Transition = ReturnType<typeof transition>
