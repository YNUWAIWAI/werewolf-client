import {AdvancedSearch} from '../constants/ActionTypes'
import {lobby} from '../types'

export type AdvancedSearch$ChangeAvatar = {
  avatar: lobby.Avatar
  type: AdvancedSearch.CHANGE_AVATAR
}
const changeAvatar = (avatar: lobby.Avatar): AdvancedSearch$ChangeAvatar => ({
  avatar,
  type: AdvancedSearch.CHANGE_AVATAR
})

export type AdvancedSearch$ChangeCheckbox = {
  propName: string
  checked: boolean
  type: AdvancedSearch.CHANGE_CHECKBOX
}
const changeCheckbox = (propName: string) => (checked: boolean): AdvancedSearch$ChangeCheckbox => ({
  checked,
  propName,
  type: AdvancedSearch.CHANGE_CHECKBOX
})

export type AdvancedSearch$ChangeComment = {
  comment: string
  type: AdvancedSearch.CHANGE_COMMENT
}
const changeComment = (comment: string): AdvancedSearch$ChangeComment => ({
  comment,
  type: AdvancedSearch.CHANGE_COMMENT
})

export type AdvancedSearch$ChangeHostName = {
  hostName: string
  type: AdvancedSearch.CHANGE_HOST_NAME
}
const changeHostName = (hostName: string): AdvancedSearch$ChangeHostName => ({
  hostName,
  type: AdvancedSearch.CHANGE_HOST_NAME
})

export type AdvancedSearch$ChangeMaximum = {
  maximum: number
  type: AdvancedSearch.CHANGE_MAXIMUM
}
const changeMaximum = (maximum: number): AdvancedSearch$ChangeMaximum => ({
  maximum: Number(maximum),
  type: AdvancedSearch.CHANGE_MAXIMUM
})

export type AdvancedSearch$ChangeMinimum = {
  minimum: number
  type: AdvancedSearch.CHANGE_MINIMUM
}
const changeMinimum = (minimum: number): AdvancedSearch$ChangeMinimum => ({
  minimum: Number(minimum),
  type: AdvancedSearch.CHANGE_MINIMUM
})

export type AdvancedSearch$ChangeValidity = {
  propName: string
  type: AdvancedSearch.CHANGE_VALIDITY
  validity: boolean
}
const changeValidity = (propName: string) => (validity: boolean): AdvancedSearch$ChangeValidity => ({
  propName,
  type: AdvancedSearch.CHANGE_VALIDITY,
  validity
})

export type AdvancedSearch$ChangeVillageName = {
  type: AdvancedSearch.CHANGE_VILLAGE_NAME
  villageName: string
}
const changeVillageName = (villageName: string): AdvancedSearch$ChangeVillageName => ({
  type: AdvancedSearch.CHANGE_VILLAGE_NAME,
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
