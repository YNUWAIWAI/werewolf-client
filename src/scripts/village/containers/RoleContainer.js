// @flow
import Role, {type StateProps} from '../components/Role'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const mine = state.agents.filter(a => a.agentIsMine)[0]

  return {
    image: mine.image,
    name: mine.name.ja,
    role: mine.role.roleName.ja
  }
}

const RoleContainer = connect(
  mapStateToProps
)(Role)

export default RoleContainer
