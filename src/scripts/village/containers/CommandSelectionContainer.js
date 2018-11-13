// @flow
import CommandSelection, {type DispatchProps, type StateProps} from '../components/organisms/CommandSelection'
import type {Phase, RoleId} from 'village'
import {type SelectOption, selectOption} from '../actions'
import {DAY} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getRoleId} from '../constants/Role'

type Action =
  | SelectOption

const getDescriptionId = (phase: Phase, role: RoleId, fixed: boolean) => {
  const fixedState = fixed ? 'fixed' : 'unfixed'

  if (phase === DAY) {
    return `CommandSelection.Description.dayVote.${fixedState}`
  }

  switch (role) {
    case 'hunter':
      return `CommandSelection.Description.hunterVote.${fixedState}`
    case 'seer':
      return `CommandSelection.Description.seerVote.${fixedState}`
    case 'werewolf':
      return `CommandSelection.Description.werewolfVote.${fixedState}`
    default:
      return 'CommandSelection.Description.wait'
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents = state.commandSelection.agents
    .map(a => ({
      id: a.id,
      image: a.image,
      name: a.name[state.language]
    }))

  if (!state.roles.mine) {
    return {
      agents,
      descriptionId: 'CommandSelection.Description.wait',
      fixed: state.commandSelection.fixed,
      timer: {
        limit: state.base.phaseTimeLimit,
        phase: state.base.phase
      }
    }
  }

  return {
    agents,
    descriptionId: getDescriptionId(
      state.base.phase,
      getRoleId(state.roles.mine['@id']),
      state.commandSelection.fixed,
    ),
    fixed: state.commandSelection.fixed,
    timer: {
      limit: state.base.phaseTimeLimit,
      phase: state.base.phase
    }
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
