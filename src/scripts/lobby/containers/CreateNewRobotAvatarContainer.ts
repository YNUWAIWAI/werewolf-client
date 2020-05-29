import {
  CreateNewRobotAvatar as Component,
  StateProps
} from '../components/templates/CreateNewRobotAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.createNewRobotAvatar.command,
  menuItems: state.createNewRobotAvatar.menuItems
})

export const CreateNewRobotAvatarContainer = connect(
  mapStateToProps
)(Component)
