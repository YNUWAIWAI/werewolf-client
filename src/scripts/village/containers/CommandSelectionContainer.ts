/* global village */
import CommandSelection, {DispatchProps, StateProps} from '../components/organisms/CommandSelection'
import {SelectOption, selectOption} from '../actions'
import {getInitial, getText} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectOption

const getDescriptionId = (phase: village.Phase, role: village.RoleId, fixed: boolean) => {
  const fixedState = fixed ? 'fixed' : 'unfixed'

  if (phase === village.Phase.day) {
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
  const agents = state.commandSelection.allIds
    .map(agentId => {
      const agent = state.commandSelection.byId[agentId]

      return {
        id: agent.id,
        image: agent.image,
        initial: getInitial(agent.name.en),
        name: getText({
          language: state.language,
          languageMap: agent.name
        })
      }
    })

  if (!state.mine.role) {
    return {
      agents,
      descriptionId: 'CommandSelection.Description.wait',
      fixed: state.commandSelection.fixed,
      phase: state.base.phase
    }
  }

  return {
    agents,
    descriptionId: getDescriptionId(
      state.base.phase,
      state.mine.role.id,
      state.commandSelection.fixed,
    ),
    fixed: state.commandSelection.fixed,
    phase: state.base.phase
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
