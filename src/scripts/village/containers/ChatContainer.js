// @flow
import Chat, {type StateProps} from '../components/Chat'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId = {}

  state.chat.allIds
    .forEach(id => {
      byId[id] = {
        ... state.chat.byId[id],
        name: state.chat.byId[id].name[state.language]
      }
    })

  return {
    allIds: state.chat.allIds,
    byId
  }
}
const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer
