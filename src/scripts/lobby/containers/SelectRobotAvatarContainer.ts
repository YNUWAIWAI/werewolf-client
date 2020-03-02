import Component, {StateProps} from '../components/templates/SelectRobotAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.selectRobotAvatar.command,
  menuItems: state.selectRobotAvatar.menuItems
})
const SelectRobotAvatarContainer = connect(
  mapStateToProps
)(Component)

export default SelectRobotAvatarContainer
