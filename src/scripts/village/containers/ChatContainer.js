// @flow
import Chat, {type StateProps} from '../components/Chat'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const items = state.chat.items
    .map(item => ({
      id: item.id,
      image: item.image,
      intensionalDisclosureRange: item.intensionalDisclosureRange,
      isMine: item.isMine,
      name: item.name.ja,
      phaseStartTime: item.phaseStartTime,
      phaseTimeLimit: item.phaseTimeLimit,
      serverTimestamp: item.serverTimestamp,
      text: item.text
    }))

  return {
    items
  }
}
const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer
