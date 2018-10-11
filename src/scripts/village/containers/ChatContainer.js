// @flow
import Chat, {type StateProps} from '../components/organisms/Chat'
import {IntlProvider} from 'react-intl'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../../../i18n/village'

const mapStateToProps = (state: ReducerState): StateProps => {
  const byId = {}
  const {intl} = new IntlProvider(
    {
      locale: state.language,
      messages: getMessages(state.language)
    },
    {}
  ).getChildContext()

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
          text: intl.formatMessage(
            {
              id: 'ChatContainer.date'
            },
            {
              date: item.date
            }
          ),
          type: item.type
        }
      } else {
        byId[id] = {
          text: intl.formatMessage({
            id: 'ChatContainer.postMortem'
          }),
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
