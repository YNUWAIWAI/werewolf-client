import * as ActionTypes from '../constants/ActionTypes'
import BuildVillage, {DispatchProps, StateProps} from '../components/templates/BuildVillage'
import {
  BuildVillage$ChangeAvatar,
  BuildVillage$ChangeComment,
  BuildVillage$ChangeHostName,
  BuildVillage$ChangeMember,
  BuildVillage$ChangeNumberOfPlayers,
  BuildVillage$ChangeNumberOfRobots,
  BuildVillage$ChangeValidity,
  BuildVillage$ChangeVillageName,
  Transition,
  changeAvatar,
  changeComment,
  changeHostName,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeValidity,
  changeVillageName,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
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
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => {
  const menuItems = (() => {
    const keys: (keyof ReducerState['buildVillage']['validity'])[] = ['avatar', 'comment', 'hostName', 'numberOfPlayers', 'numberOfRobots', 'villageName']

    if (keys.every(key => state.buildVillage.validity[key])) {
      return state.buildVillage.menuItems
    }

    return state.buildVillage.menuItems.map(item => {
      if (item.types.includes(ActionTypes.Target.BUILD_VILLAGE)) {
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
    dispatch(changeAvatar(ActionTypes.Scope.buildVillage)(value))
  },
  handleMemberChange: value => {
    dispatch(changeMember(ActionTypes.Scope.buildVillage)(value))
  },
  handleNumberChange: propName => value => {
    if (propName === 'numberOfPlayers') {
      dispatch(changeNumberOfPlayers(ActionTypes.Scope.buildVillage)(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(changeNumberOfRobots(ActionTypes.Scope.buildVillage)(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(changeComment(ActionTypes.Scope.buildVillage)(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName(ActionTypes.Scope.buildVillage)(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName(ActionTypes.Scope.buildVillage)(value))
    }
  },
  handleValidityChange: propName => validity => {
    dispatch(changeValidity(ActionTypes.Scope.buildVillage)(propName)(validity))
  },
  transition: target => {
    dispatch(transition(target))
  }
})
const BuildVillageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildVillage)

export default BuildVillageContainer
