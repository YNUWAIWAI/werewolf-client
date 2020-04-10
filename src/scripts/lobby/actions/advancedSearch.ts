import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace AdvancedSearch {
  type ChangeAvatar = {
    avatar: lobby.Avatar
    type: ActionTypes.AdvancedSearch.CHANGE_AVATAR
    valid: boolean
  }
  type ChangeCheckbox = {
    propName: string
    checked: boolean
    type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
  }
  type ChangeComment = {
    comment: string
    type: ActionTypes.AdvancedSearch.CHANGE_COMMENT
    valid: boolean
  }
  type ChangeHostName = {
    hostName: string
    type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME
    valid: boolean
  }
  type ChangeMaximum = {
    maximum: number
    type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM
    valid: boolean
  }
  type ChangeMinimum = {
    minimum: number
    type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM
    valid: boolean
  }
  type ChangeVillageName = {
    type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME
    valid: boolean
    villageName: string
  }
}

const changeAvatar = (valid: boolean) => (avatar: lobby.Avatar): AdvancedSearch.ChangeAvatar => ({
  avatar,
  type: ActionTypes.AdvancedSearch.CHANGE_AVATAR,
  valid
})
const changeCheckbox = (propName: string) => (checked: boolean): AdvancedSearch.ChangeCheckbox => ({
  checked,
  propName,
  type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
})
const changeComment = (valid: boolean) => (comment: string): AdvancedSearch.ChangeComment => ({
  comment,
  type: ActionTypes.AdvancedSearch.CHANGE_COMMENT,
  valid
})
const changeHostName = (valid: boolean) => (hostName: string): AdvancedSearch.ChangeHostName => ({
  hostName,
  type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME,
  valid
})
const changeMaximum = (valid: boolean) => (maximum: number): AdvancedSearch.ChangeMaximum => ({
  maximum: Number(maximum),
  type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM,
  valid
})
const changeMinimum = (valid: boolean) => (minimum: number): AdvancedSearch.ChangeMinimum => ({
  minimum: Number(minimum),
  type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM,
  valid
})
const changeVillageName = (valid: boolean) => (villageName: string): AdvancedSearch.ChangeVillageName => ({
  type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME,
  valid,
  villageName
})

export const advancedSearch = {
  changeAvatar,
  changeCheckbox,
  changeComment,
  changeHostName,
  changeMaximum,
  changeMinimum,
  changeVillageName
}
