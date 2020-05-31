import {
  SelectRobotAvatar as Component,
  StateProps
} from '../components/templates/SelectRobotAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.selectRobotAvatar.command,
  menuItems: state.selectRobotAvatar.menuItems
})

export const SelectRobotAvatarContainer = connect(
  mapStateToProps
)(Component)
