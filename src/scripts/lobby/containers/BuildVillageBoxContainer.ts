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
  handleAvatarChange: valid => value => {
    dispatch(buildVillage.changeAvatar(valid)(value))
  },
  handleMemberChange: valid => value => {
    dispatch(buildVillage.changeMember(valid)(value))
  },
  handleNumberChange: propName => valid => value => {
    if (propName === 'numberOfPlayers') {
      dispatch(buildVillage.changeNumberOfPlayers(valid)(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(buildVillage.changeNumberOfRobots(valid)(value))
    }
  },
  handleTextChange: propName => valid => value => {
    if (propName === 'comment') {
      dispatch(buildVillage.changeComment(valid)(value))
    }
    if (propName === 'villageName') {
      dispatch(buildVillage.changeVillageName(valid)(value))
    }
  }
})
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Container
