// @flow
import RoleComponent, {type StateProps} from '../components/Role'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const myAgent: Agent = state.agents.filter(a => a.agentIsMine)[0]
  const myRole: Role = state.roles.filter(r => r.roleIsMine)[0]

  return {
    image: myAgent.image,
    name: myAgent.name.ja,
    role: myRole.name.ja
  }
}

const RoleContainer = connect(
  mapStateToProps
)(RoleComponent)

export default RoleContainer
