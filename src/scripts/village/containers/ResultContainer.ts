import {HideResult, hideResult} from '../actions'
import Result, {DispatchProps, StateProps} from '../components/organisms/Result'
import {getInitial, getText} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | HideResult

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents: StateProps['agents'] = {}

  state.result.allIds.forEach(id => {
    const a = state.result.agents[id]

    agents[id] = {
      agentId: a.agentId,
      agentImage: a.agentImage,
      agentInitial: getInitial(a.agentName.en),
      agentName: getText({
        language: state.language,
        languageMap: a.agentName
      }),
      avatarImage: a.avatarImage,
      avatarName: a.avatarName,
      result: a.result,
      roleImage: a.roleImage,
      roleName: getText({
        language: state.language,
        languageMap: a.roleName
      }),
      status: a.status
    }
  })
  const myTeam = state.result.summary.kind === 'audience' ? '' : state.result.summary.myTeam // '' => 'audience'
  const summary: StateProps['summary'] = {
    loserTeam: state.result.summary.loserTeam,
    myTeam,
    winnerTeam: state.result.summary.winnerTeam
  }

  return {
    agents,
    losers: state.result.losers,
    me: state.result.me,
    summary,
    visible: state.result.visible,
    winners: state.result.winners
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickCloseButton: () => {
    dispatch(hideResult())
  }
})
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
