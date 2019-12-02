import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage, {
  DispatchProps,
  StateProps
} from '../components/templates/BuildVillage'
import {
  BuildVillage$ChangeAvatar,
  BuildVillage$ChangeComment,
  BuildVillage$ChangeMember,
  BuildVillage$ChangeNumberOfPlayers,
  BuildVillage$ChangeNumberOfRobots,
  BuildVillage$ChangeValidity,
  BuildVillage$ChangeVillageName,
  buildVillage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | BuildVillage$ChangeAvatar
  | BuildVillage$ChangeComment
  | BuildVillage$ChangeMember
  | BuildVillage$ChangeNumberOfPlayers
  | BuildVillage$ChangeNumberOfRobots
  | BuildVillage$ChangeValidity
  | BuildVillage$ChangeVillageName

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    const keys: (keyof ReducerState['buildVillage']['validity'])[] = ['avatar', 'comment', 'numberOfPlayers', 'numberOfRobots', 'villageName']

    if (keys.every(key => state.buildVillage.validity[key])) {
      return state.buildVillage.menuItems
    }

    return state.buildVillage.menuItems.map(item => {
      if (item.types.includes(ActionTypes.App.BUILD_VILLAGE)) {
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
    dispatch(buildVillage.changeAvatar(value))
  },
  handleMemberChange: value => {
    dispatch(buildVillage.changeMember(value))
  },
  handleNumberChange: propName => value => {
    if (propName === 'numberOfPlayers') {
      dispatch(buildVillage.changeNumberOfPlayers(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(buildVillage.changeNumberOfRobots(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(buildVillage.changeComment(value))
    }
    if (propName === 'villageName') {
      dispatch(buildVillage.changeVillageName(value))
    }
  },
  handleValidityChange: propName => validity => {
    dispatch(buildVillage.changeValidity(propName)(validity))
  }
})
const BuildVillageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildVillage)

export default BuildVillageContainer
