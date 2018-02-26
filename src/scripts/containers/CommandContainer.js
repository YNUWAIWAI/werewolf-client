import Command from '../components/Command'
import {connect} from 'react-redux'
import {postChat, setIsSendable} from '../actions'

const mapStateToProps = state => state.command
const mapDispatchToProps = dispatch => ({
  handlePostChat: kind => text => dispatch(postChat({
    kind,
    text
  })),
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
