// @flow
import Chat, {type StateProps} from '../components/Chat'
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
      } else if (item.type === 'delimeter' && item.date >= 0) {
        byId[id] = {
          text: {
            en: `Day ${item.date}`,
            fr: `Day ${item.date}`,
            it: `Day ${item.date}`,
            ja: `${item.date}日目`
          }[state.language],
          type: item.type
        }
      } else {
        byId[id] = {
          text: {
            en: 'Post Mortem',
            fr: 'Post Mortem',
            it: 'Post Mortem',
            ja: '感想戦'
          }[state.language],
          type: item.type
        }
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
