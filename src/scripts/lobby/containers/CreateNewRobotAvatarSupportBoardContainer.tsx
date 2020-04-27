import Component, {StateProps} from '../components/organisms/CreateNewRobotAvatarSupportBoard'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  data: state.createNewRobotAvatarSupport.data
})
const Container = connect(
  mapStateToProps
)(Component)

export default Container
