import Component, {StateProps} from '../components/templates/CreateNewHumanAvatar'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  command: state.createNewHumanAvatar.command,
  menuItems: state.createNewHumanAvatar.menuItems
})
const Container = connect(
  mapStateToProps
)(Component)

export default Container
