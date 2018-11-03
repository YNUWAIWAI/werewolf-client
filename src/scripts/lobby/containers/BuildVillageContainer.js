// @flow
import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage, {type DispatchProps, type StateProps} from '../components/templates/BuildVillage'
import {
  type BuildVillage$ChangeAvatar,
  type BuildVillage$ChangeComment,
  type BuildVillage$ChangeHostName,
  type BuildVillage$ChangeMember,
  type BuildVillage$ChangeNumberOfPlayers,
  type BuildVillage$ChangeNumberOfRobots,
  type BuildVillage$ChangeValidity,
  type BuildVillage$ChangeVillageName,
  changeAvatar,
  changeComment,
  changeHostName,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeValidity,
  changeVillageName
} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | BuildVillage$ChangeAvatar
  | BuildVillage$ChangeComment
  | BuildVillage$ChangeHostName
  | BuildVillage$ChangeMember
  | BuildVillage$ChangeNumberOfPlayers
  | BuildVillage$ChangeNumberOfRobots
  | BuildVillage$ChangeValidity
  | BuildVillage$ChangeVillageName

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    if (Object.keys(state.buildVillage.validity).every(key => state.buildVillage.validity[key])) {
      return state.buildVillage.menuItems
    }

    return state.buildVillage.menuItems.map(item => {
      if (item.types.includes(ActionTypes.BUILD_VILLAGE)) {
        return {
          ... item,
          disabled: true
        }
      }

      return item
    })
  })()

  return {
    image: state.buildVillage.image,
    menuItems,
    name: state.buildVillage.name,
    validity: state.buildVillage.validity,
    value: {
      avatar: state.buildVillage.value.avatar,
      comment: state.buildVillage.value.comment,
      hostName: state.buildVillage.value.hostName,
      numberOfHumans: state.buildVillage.value.numberOfHumans,
      numberOfPlayers: state.buildVillage.value.numberOfPlayers,
      numberOfRobots: state.buildVillage.value.numberOfRobots,
      villageName: state.buildVillage.value.villageName
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleAvatarChange: value => {
    dispatch(changeAvatar('buildVillage')(value))
  },
  handleMemberChange: value => {
    dispatch(changeMember('buildVillage')(value))
  },
  handleNumberChange: propName => value => {
    if (propName === 'numberOfPlayers') {
      dispatch(changeNumberOfPlayers('buildVillage')(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(changeNumberOfRobots('buildVillage')(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(changeComment('buildVillage')(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName('buildVillage')(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName('buildVillage')(value))
    }
  },
  handleValidityChange: propName => validity => {
    dispatch(changeValidity('buildVillage')(propName)(validity))
  }
})
const BuildVillageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildVillage)

export default BuildVillageContainer
