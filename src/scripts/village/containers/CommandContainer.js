import {HUNTER, SEER, WEREWOLF} from '../constants/Role'
import {postChat, selectOption, setIsSendable} from '../actions'
import Command from '../components/Command'
import {DAY_VOTE} from '../constants/Phase'
import {connect} from 'react-redux'

const getText = (phase, myRole, fixed) => {
  if (phase === DAY_VOTE) {
    return '投票先を選んでください'
  }

  switch (myRole['@id']) {
    case WEREWOLF:
      return fixed ? 'あなたの選んだ襲撃先はこちらです' : '襲撃先を選んでください'
    case SEER:
      return fixed ? 'あなたの選んだ占い先はこちらです' : '占い先を選んでください'
    case HUNTER:
      return fixed ? 'あなたの選んだ守護先はこちらです' : '守護先を選んでください'
    default:
      return '待ってください'
  }
}

const mapStateToProps = state => ({
  ... state.command,
  agents: state.agents,
  isHide: state.hideButton.isHide,
  phase: state.base.phase,
  text: getText(state.base.phase, state.mine.myRole, state.command.fixed)
})

const mapDispatchToProps = dispatch => ({
  handlePostChat: kind => text => dispatch(postChat({
    kind,
    text
  })),
  handleSelectOption: agent => dispatch(selectOption(agent)),
  setIsSendable: kind => isSendable => dispatch(setIsSendable({
    isSendable,
    kind
  }))
})
const CommandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Command)

export default CommandContainer
