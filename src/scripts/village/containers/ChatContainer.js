// @flow
import Chat, {type StateProps} from '../components/organisms/Chat'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId = {}

  state.chat.allIds
    .forEach(id => {
      const item = state.chat.byId[id]

      if (item.type === 'item') {
        if (typeof item.name === 'string') {
          byId[id] = {
            ... item,
            name: item.name
          }
        } else { // item.name: LanguageMap
          byId[id] = {
            ... item,
            name: getText({
              language: state.language,
              languageMap: item.name
            })
          }
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
