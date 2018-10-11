// @flow
import RoleComponent, {type StateProps} from '../components/molecules/Role'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  if (!(state.agents.mine && state.roles.mine)) {
    return {
      image: '',
      name: '',
      role: ''
    }
  }

  return {
    image: state.agents.mine.image,
    name: state.agents.mine.name[state.language],
    role: state.roles.mine.name[state.language]
  }
}

const RoleContainer = connect(
  mapStateToProps
)(RoleComponent)

export default RoleContainer
