import Chat from '../components/Chat'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  const items = state.chat.items
    .map(item => ({
      id: item.chatId,
      image: item.chatAgent.chatAgentImage,
      intensionalDisclosureRange: item.intensionalDisclosureRange,
      isMine: item.chatIsMine,
      name: item.chatAgent.chatAgentName.ja,
      phaseStartTime: item.phaseStartTime,
      phaseTimeLimit: item.phaseTimeLimit,
      serverTimestamp: item.serverTimestamp,
      text: item.chatText
    }))

  return {
    items
  }
}
const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer
