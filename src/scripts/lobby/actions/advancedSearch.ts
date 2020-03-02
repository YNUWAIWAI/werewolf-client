import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace AdvancedSearch {
  type ChangeAvatar = {
    avatar: lobby.Avatar
    type: ActionTypes.AdvancedSearch.CHANGE_AVATAR
  }
  type ChangeCheckbox = {
    propName: string
    checked: boolean
    type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
  }
  type ChangeComment = {
    comment: string
    type: ActionTypes.AdvancedSearch.CHANGE_COMMENT
  }
  type ChangeHostName = {
    hostName: string
    type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME
  }
  type ChangeMaximum = {
    maximum: number
    type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM
  }
  type ChangeMinimum = {
    minimum: number
    type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM
  }
  type ChangeValidity = {
    propName: string
    type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY
    validity: boolean
  }
  type ChangeVillageName = {
    type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME
    villageName: string
  }
}

const changeAvatar = (avatar: lobby.Avatar): AdvancedSearch.ChangeAvatar => ({
  avatar,
  type: ActionTypes.AdvancedSearch.CHANGE_AVATAR
})
const changeCheckbox = (propName: string) => (checked: boolean): AdvancedSearch.ChangeCheckbox => ({
  checked,
  propName,
  type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
})
const changeComment = (comment: string): AdvancedSearch.ChangeComment => ({
  comment,
  type: ActionTypes.AdvancedSearch.CHANGE_COMMENT
})
const changeHostName = (hostName: string): AdvancedSearch.ChangeHostName => ({
  hostName,
  type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME
})
const changeMaximum = (maximum: number): AdvancedSearch.ChangeMaximum => ({
  maximum: Number(maximum),
  type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM
})
const changeMinimum = (minimum: number): AdvancedSearch.ChangeMinimum => ({
  minimum: Number(minimum),
  type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM
})
const changeValidity = (propName: string) => (validity: boolean): AdvancedSearch.ChangeValidity => ({
  propName,
  type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
  validity
})
const changeVillageName = (villageName: string): AdvancedSearch.ChangeVillageName => ({
  type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME,
  villageName
})

export const advancedSearch = {
  changeAvatar,
  changeCheckbox,
  changeComment,
  changeHostName,
  changeMaximum,
  changeMinimum,
  changeValidity,
  changeVillageName
}
