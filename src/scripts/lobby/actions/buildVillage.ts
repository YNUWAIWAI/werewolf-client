import {BuildVillage} from '../constants/ActionTypes'
import {lobby} from '../types'

export type BuildVillage$ChangeAvatar = {
  avatar: lobby.Avatar
  type: BuildVillage.CHANGE_AVATAR
}
const changeAvatar = (avatar: lobby.Avatar): BuildVillage$ChangeAvatar => ({
  avatar,
  type: BuildVillage.CHANGE_AVATAR
})

export type BuildVillage$ChangeComment = {
  comment: string
  type: BuildVillage.CHANGE_COMMENT
}
const changeComment = (comment: string): BuildVillage$ChangeComment => ({
  comment,
  type: BuildVillage.CHANGE_COMMENT
})

export type BuildVillage$ChangeMember = {
  member: lobby.Member
  type: BuildVillage.CHANGE_MEMBER
}
const changeMember = (member: lobby.Member): BuildVillage$ChangeMember => ({
  member,
  type: BuildVillage.CHANGE_MEMBER
})

export type BuildVillage$ChangeNumberOfPlayers = {
  numberOfPlayers: number
  type: BuildVillage.CHANGE_NUMBER_OF_PLAYERS
}
const changeNumberOfPlayers = (numberOfPlayers: number): BuildVillage$ChangeNumberOfPlayers => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: BuildVillage.CHANGE_NUMBER_OF_PLAYERS
})

export type BuildVillage$ChangeNumberOfRobots = {
  numberOfRobots: number
  type: BuildVillage.CHANGE_NUMBER_OF_ROBOTS
}
const changeNumberOfRobots = (numberOfRobots: number): BuildVillage$ChangeNumberOfRobots => ({
  numberOfRobots: Number(numberOfRobots),
  type: BuildVillage.CHANGE_NUMBER_OF_ROBOTS
})

export type BuildVillage$ChangeValidity = {
  propName: string
  type: BuildVillage.CHANGE_VALIDITY
  validity: boolean
}
const changeValidity = (propName: string) => (validity: boolean): BuildVillage$ChangeValidity => ({
  propName,
  type: BuildVillage.CHANGE_VALIDITY,
  validity
})

export type BuildVillage$ChangeVillageName = {
  type: BuildVillage.CHANGE_VILLAGE_NAME
  villageName: string
}
const changeVillageName = (villageName: string): BuildVillage$ChangeVillageName => ({
  type: BuildVillage.CHANGE_VILLAGE_NAME,
  villageName
})

export const buildVillage = {
  changeAvatar,
  changeComment,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeValidity,
  changeVillageName
}
