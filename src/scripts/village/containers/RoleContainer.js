// @flow
import RoleComponent, {type StateProps} from '../components/Role'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => ({
  image: state.agents.mine.image,
  name: state.agents.mine.name.ja,
  role: state.roles.mine.name.ja
})

const RoleContainer = connect(
  mapStateToProps
)(RoleComponent)

export default RoleContainer
