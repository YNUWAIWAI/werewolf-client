import {
  CreateNewAvatarSupportBoard as Component,
  DispatchProps,
  StateProps
} from '../components/organisms/CreateNewAvatarSupportBoard'
import {
  CreateNewRobotAvatar,
  createNewRobotAvatar
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | CreateNewRobotAvatar.ShowSupportSelect

const mapStateToProps = (state: ReducerState): StateProps => ({
  data: state.createNewRobotAvatarSupport.data
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleSupportBoardClick: () => {
    dispatch(createNewRobotAvatar.showSupportSelect())
  }
})

export const CreateNewAvatarSupportBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
