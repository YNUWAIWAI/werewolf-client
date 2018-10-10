// @flow
import CommandSelection, {type DispatchProps, type StateProps} from '../components/CommandSelection'
import type {Language, Phase, RoleId} from 'village'
import {type SelectOption, selectOption} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getRoleId} from '../constants/Role'

type Action =
  | SelectOption

const getText = (phase: Phase, role: RoleId, fixed: boolean, lang: Language) => {
  if (phase === DAY_VOTE) {
    return fixed ?
      {
        en: 'EN',
        fr: 'FR',
        it: 'IT',
        ja: 'あなたの選んだ投票先はこちらです'
      }[lang] :
      {
        en: 'EN',
        fr: 'FR',
        it: 'IT',
        ja: '投票先を選んでください'
      }[lang]
  }

  switch (role) {
    case 'hunter':
      return fixed ?
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: 'あなたの選んだ守護先はこちらです'
        }[lang] :
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: '守護先を選んでください'
        }[lang]
    case 'seer':
      return fixed ?
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: 'あなたの選んだ占い先はこちらです'
        }[lang] :
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: '占い先を選んでください'
        }[lang]
    case 'werewolf':
      return fixed ?
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: 'あなたの選んだ襲撃先はこちらです'
        }[lang] :
        {
          en: 'EN',
          fr: 'FR',
          it: 'IT',
          ja: '襲撃先を選んでください'
        }[lang]
    default:
      return {
        en: 'EN',
        fr: 'FR',
        it: 'IT',
        ja: '待ってください'
      }[lang]
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
      fixed: state.commandSelection.fixed,
      text: '',
      timer: {
        limit: state.base.phaseTimeLimit,
        phase: state.base.phase
      }
    }
  }

  return {
    agents,
    fixed: state.commandSelection.fixed,
    text: getText(
      state.base.phase,
      getRoleId(state.roles.mine['@id']),
      state.commandSelection.fixed,
      state.language
    ),
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
