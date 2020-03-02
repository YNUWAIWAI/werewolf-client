import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace BuildVillage {
  type ChangeAvatar = {
    avatar: lobby.Avatar
    type: ActionTypes.BuildVillage.CHANGE_AVATAR
  }
  type ChangeComment = {
    comment: string
    type: ActionTypes.BuildVillage.CHANGE_COMMENT
  }
  type ChangeMember = {
    member: lobby.Member
    type: ActionTypes.BuildVillage.CHANGE_MEMBER
  }
  type ChangeNumberOfPlayers = {
    numberOfPlayers: number
    type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
  }
  type ChangeNumberOfRobots = {
    numberOfRobots: number
    type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS
  }
  type ChangeValidity = {
    propName: string
    type: ActionTypes.BuildVillage.CHANGE_VALIDITY
    validity: boolean
  }
  type ChangeVillageName = {
    type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME
    villageName: string
  }
}

const changeAvatar = (avatar: lobby.Avatar): BuildVillage.ChangeAvatar => ({
  avatar,
  type: ActionTypes.BuildVillage.CHANGE_AVATAR
})
const changeComment = (comment: string): BuildVillage.ChangeComment => ({
  comment,
  type: ActionTypes.BuildVillage.CHANGE_COMMENT
})
const changeMember = (member: lobby.Member): BuildVillage.ChangeMember => ({
  member,
  type: ActionTypes.BuildVillage.CHANGE_MEMBER
})
const changeNumberOfPlayers = (numberOfPlayers: number): BuildVillage.ChangeNumberOfPlayers => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
})
const changeNumberOfRobots = (numberOfRobots: number): BuildVillage.ChangeNumberOfRobots => ({
  numberOfRobots: Number(numberOfRobots),
  type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS
})
const changeValidity = (propName: string) => (validity: boolean): BuildVillage.ChangeValidity => ({
  propName,
  type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
  validity
})
const changeVillageName = (villageName: string): BuildVillage.ChangeVillageName => ({
  type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME,
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
