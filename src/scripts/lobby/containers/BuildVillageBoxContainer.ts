import {
  BuildVillage,
  buildVillage
} from '../actions'
import Component, {
  DispatchProps,
  StateProps
} from '../components/organisms/BuildVillageBox'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | BuildVillage.ChangeAvatar
  | BuildVillage.ChangeComment
  | BuildVillage.ChangeMember
  | BuildVillage.ChangeNumberOfPlayers
  | BuildVillage.ChangeNumberOfRobots
  | BuildVillage.ChangeValidity
  | BuildVillage.ChangeVillageName

const mapStateToProps = (state: ReducerState): StateProps => ({
  navigatable: !state.obfucator.visible,
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
})
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
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
