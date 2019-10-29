import CommandSelection, {DispatchProps, StateProps} from '../components/organisms/CommandSelection'
import {SelectOption, selectOption} from '../actions'
import {getInitial, getText} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {village} from '../types'

type Action =
  | SelectOption

const getDescriptionId = (phase: village.Phase, role: village.RoleId, fixed: boolean) => {
  const fixedState = fixed ? 'fixed' : 'unfixed'

  if (phase === village.Phase.noon) {
    return `CommandSelection.Description.noonVote.${fixedState}`
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
  const characters = state.commandSelection.allIds
    .map(characterId => {
      const character = state.commandSelection.byId[characterId]

      return {
        id: character.id,
        image: character.image,
        initial: getInitial(character.name.en),
        name: getText({
          language: state.language,
          languageMap: character.name
        })
      }
    })

  if (!state.mine.role) {
    return {
      characters,
      descriptionId: 'CommandSelection.Description.wait',
      fixed: state.commandSelection.fixed,
      phase: state.base.phase
    }
  }

  return {
    characters,
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
  handleSelectOption: characterId => () => {
    dispatch(
      selectOption(characterId)
    )
  }
})
const CommandSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandSelection)

export default CommandSelectionContainer
