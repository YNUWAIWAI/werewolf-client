import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace BuildVillage {
  type ChangeAvatar = {
    avatar: lobby.Avatar
    type: ActionTypes.BuildVillage.CHANGE_AVATAR
    valid: boolean
  }
  type ChangeComment = {
    comment: string
    type: ActionTypes.BuildVillage.CHANGE_COMMENT
    valid: boolean
  }
  type ChangeMember = {
    member: lobby.Member
    type: ActionTypes.BuildVillage.CHANGE_MEMBER
    valid: boolean
  }
  type ChangeNumberOfPlayers = {
    numberOfPlayers: number
    type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
    valid: boolean
  }
  type ChangeNumberOfRobots = {
    numberOfRobots: number
    type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS
    valid: boolean
  }
  type ChangeVillageName = {
    type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME
    valid: boolean
    villageName: string
  }
}

const changeAvatar = (valid: boolean) => (avatar: lobby.Avatar): BuildVillage.ChangeAvatar => ({
  avatar,
  type: ActionTypes.BuildVillage.CHANGE_AVATAR,
  valid
})
const changeComment = (valid: boolean) => (comment: string): BuildVillage.ChangeComment => ({
  comment,
  type: ActionTypes.BuildVillage.CHANGE_COMMENT,
  valid
})
const changeMember = (valid: boolean) => (member: lobby.Member): BuildVillage.ChangeMember => ({
  member,
  type: ActionTypes.BuildVillage.CHANGE_MEMBER,
  valid
})
const changeNumberOfPlayers = (valid: boolean) => (numberOfPlayers: number): BuildVillage.ChangeNumberOfPlayers => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS,
  valid
})
const changeNumberOfRobots = (valid: boolean) => (numberOfRobots: number): BuildVillage.ChangeNumberOfRobots => ({
  numberOfRobots: Number(numberOfRobots),
  type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS,
  valid
})
const changeVillageName = (valid: boolean) => (villageName: string): BuildVillage.ChangeVillageName => ({
  type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME,
  valid,
  villageName
})

export const buildVillage = {
  changeAvatar,
  changeComment,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeVillageName
}
