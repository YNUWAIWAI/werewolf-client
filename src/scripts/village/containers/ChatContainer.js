// @flow
import Chat, {type StateProps} from '../components/organisms/Chat'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId = {}

  state.chat.allIds
    .forEach(id => {
      const item = state.chat.byId[id]

      if (item.type === 'item') {
        byId[id] = {
          ... item,
          name: item.name[state.language]
        }
      } else { // item.type === 'delimeter'
        byId[id] = item
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
