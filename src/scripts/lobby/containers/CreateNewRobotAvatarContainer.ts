import Component, {StateProps} from '../components/templates/CreateNewRobotAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.createNewRobotAvatar.command,
  menuItems: state.createNewRobotAvatar.menuItems
})
const Container = connect(
  mapStateToProps
)(Component)

export default Container
