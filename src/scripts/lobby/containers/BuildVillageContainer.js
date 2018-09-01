// @flow
import BuildVillage, {type DispatchProps, type StateProps} from '../components/BuildVillage'
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

const mapStateToProps = (state: ReducerState): StateProps => ({
  menuItems: state.buildVillage.menuItems,
  village: {
    comment: state.buildVillage.village.comment,
    hostName: state.buildVillage.village.hostName,
    numberOfHumans: state.buildVillage.village.numberOfHumans,
    numberOfPlayers: state.buildVillage.village.numberOfPlayers,
    numberOfRobots: state.buildVillage.village.numberOfRobots,
    villageName: state.buildVillage.village.villageName
  }
})
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
