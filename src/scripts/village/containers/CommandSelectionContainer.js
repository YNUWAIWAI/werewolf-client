// @flow
import CommandSelection, {type DispatchProps, type StateProps} from '../components/CommandSelection'
import {type SelectOption, selectOption} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getRoleId} from '../constants/Role'

type Action =
  | SelectOption

const getText = (phase: Phase, role: RoleId, fixed: boolean) => {
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
      agents: state.agents.all,
      text: ''
    }
  }

  return {
    agents: state.agents.all,
    text: getText(state.base.phase, getRoleId(state.roles.mine['@id']), state.commandSelection.fixed)
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
