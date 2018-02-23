import CommandInput from '../components/CommandInput'
import {connect} from 'react-redux'
import {postChat, setIsSendable} from '../actions'

const mapStateToProps = state => state.commandInput
const mapDispatchToProps = dispatch => ({
  handlePostChat: ({kind, text}) => dispatch(postChat({
    kind,
    text
  })),
  setIsSendable: ({isSendable, kind}) => dispatch(setIsSendable({
    isSendable,
    kind
  }))
})
const CommandInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandInput)

export default CommandInputContainer
