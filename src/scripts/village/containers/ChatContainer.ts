import Chat, {DispatchProps, StateProps} from '../components/organisms/Chat'
import {StarChat, starChat} from '../actions'
import {getInitial, getText} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {village} from '../types'

type Action =
  | StarChat

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId: StateProps['byId'] = {}

  state.chat.allIds
    .forEach(id => {
      const item = state.chat.byId[id]

      if (item.type === village.ChatItemType.item) {
        if (typeof item.name === 'string') {
          byId[id] = {
            ... item,
            initial: '',
            name: item.name
          }
        } else { // item.name: LanguageMap
          byId[id] = {
            ... item,
            initial: getInitial(item.name.en),
            name: getText({
              language: state.language,
              languageMap: item.name
            })
          }
        }
      } else { // item.type === village.ChatItemType.delimeter
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
