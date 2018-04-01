// @flow
import BuildVillage, {type DispatchProps, type StateProps} from '../components/BuildVillage'
import {
  type ChangeAvatar,
  type ChangeComment,
  type ChangeHostName,
  type ChangeMember,
  type ChangeNumberOfPlayers,
  type ChangeNumberOfRobots,
  type ChangeVillageName,
  changeAvatar,
  changeComment,
  changeHostName,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeVillageName
} from '../actions'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ChangeAvatar
  | ChangeComment
  | ChangeHostName
  | ChangeMember
  | ChangeNumberOfPlayers
  | ChangeNumberOfRobots
  | ChangeVillageName

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
    dispatch(changeAvatar(value))
  },
  handleMemberChange: value => {
    dispatch(changeMember(value))
  },
  handleNumberChange: propName => value => {
    if (propName === 'numberOfPlayers') {
      dispatch(changeNumberOfPlayers(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(changeNumberOfRobots(value))
    }
  },
  handleTextChange: propName => value => {
    if (propName === 'comment') {
      dispatch(changeComment(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName(value))
    }
  }
})
const BuildVillageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildVillage)

export default BuildVillageContainer
