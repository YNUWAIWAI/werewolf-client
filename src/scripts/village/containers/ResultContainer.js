// @flow
import Result, {type StateProps} from '../components/Result'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const rows = state.result.agents.map(a => ({
    agentId: a.agentId,
    agentImage: a.agentImage,
    agentName: a.agentName.ja,
    result: a.result,
    roleImage: a.roleImage,
    roleName: a.roleName.ja,
    status: a.status,
    userAvatar: a.userAvatar,
    userName: a.userName
  }))

  return {
    rows,
    summary: state.result.summary,
    visible: state.result.visible
  }
}
const ResultContainer = connect(
  mapStateToProps
)(Result)

export default ResultContainer
