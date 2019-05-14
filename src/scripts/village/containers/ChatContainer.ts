import Chat, {DispatchProps, StateProps} from '../components/organisms/Chat'
import {StarChat, starChat} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

type Action =
  | StarChat

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId: StateProps['byId'] = {}

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
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleStar: id => isMarked => {
    dispatch(starChat({
      id,
      isMarked
    }))
  }
})
const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
