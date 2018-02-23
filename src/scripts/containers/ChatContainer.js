import Chat from '../components/Chat'
import {connect} from 'react-redux'

const mapStateToProps = state => state.chat
const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer
