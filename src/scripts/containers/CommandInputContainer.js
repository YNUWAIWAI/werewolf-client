import CommandInput from '../components/CommandInput'
import {connect} from 'react-redux'
import {postChat} from '../actions'

const mapStateToProps = state => state.commandInput
const mapDispatchToProps = dispatch => ({
  handlePostChat: ({kind, text}) => dispatch(postChat({
    kind,
    text
  }))
})
const CommandInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandInput)

export default CommandInputContainer
