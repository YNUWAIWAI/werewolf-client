import Chat from '../components/Chat'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  const items = state.chat.items
    .map(item => ({
      chatId: item.chatId,
      chatText: item.chatText,
      image: item.chatAgent.chatAgentImage,
      intensionalDisclosureRange: item.intensionalDisclosureRange,
      name: item.chatAgent.chatAgentName.ja,
      phaseStartTime: item.phaseStartTime,
      phaseTimeLimit: item.phaseTimeLimit,
      serverTimestamp: item.serverTimestamp
    }))

  return {
    items
  }
}
const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer
