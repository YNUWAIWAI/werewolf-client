import CommandSelection, {DispatchProps, StateProps} from '../components/organisms/CommandSelection'
import {SelectOption, selectOption} from '../actions'
import {getText, strToRoleId} from '../util'
import {DAY} from '../constants/Phase'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectOption

const getDescriptionId = (phase: village.Phase, role: village.RoleId, fixed: boolean) => {
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
      name: getText({
        language: state.language,
        languageMap: a.name
      })
    }))

  if (!state.roles.mine) {
    return {
      agents,
      descriptionId: 'CommandSelection.Description.wait',
      fixed: state.commandSelection.fixed
    }
  }

  return {
    agents,
    descriptionId: getDescriptionId(
      state.base.phase,
      strToRoleId(state.roles.mine.name.en),
      state.commandSelection.fixed,
    ),
    fixed: state.commandSelection.fixed
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
