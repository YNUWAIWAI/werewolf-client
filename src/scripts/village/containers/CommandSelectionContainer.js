// @flow
import CommandSelection, {type DispatchProps, type StateProps} from '../components/CommandSelection'
import {type SelectOption, selectOption} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {trimBaseUri} from '../module/util'

type Action =
  | SelectOption

const getText = (phase, role, fixed) => {
  if (phase === DAY_VOTE) {
    return '投票先を選んでください'
  }

  switch (role) {
    case 'werewolf':
      return fixed ? 'あなたの選んだ襲撃先はこちらです' : '襲撃先を選んでください'
    case 'seer':
      return fixed ? 'あなたの選んだ占い先はこちらです' : '占い先を選んでください'
    case 'hunter':
      return fixed ? 'あなたの選んだ守護先はこちらです' : '守護先を選んでください'
    default:
      return '待ってください'
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.roles.mine) {
    return {
      ... state.command,
      agents: state.agents.all,
      fixed: false,
      text: ''
    }
  }

  return {
    ... state.command,
    agents: state.agents.all,
    fixed: false,
    text: getText(state.base.phase, trimBaseUri(state.roles.mine['@id']), state.command.fixed)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleSelectOption: agentId => () => {
    dispatch(
      selectOption(agentId)
    )
  }
})
const CommandSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandSelection)

export default CommandSelectionContainer
