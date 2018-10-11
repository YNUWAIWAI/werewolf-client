// @flow
import * as ActionTypes from '../constants/ActionTypes'
import CommandPostMortem, {type DispatchProps, type StateProps} from '../components/organisms/CommandPostMortem'
import {type PostChat, postChat} from '../actions'
import type {Dispatch} from 'redux'
import {IntlProvider} from 'react-intl'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../../../i18n/village'

type Action =
  | PostChat

const mapStateToProps = (state: ReducerState): StateProps => {
  const {intl} = new IntlProvider(
    {
      locale: state.language,
      messages: getMessages(state.language)
    },
    {}
  ).getChildContext()

  return {
    navigation: [
      {
        text: intl.formatMessage({
          id: 'CommandPostMortemContainer.showResult'
        }),
        type: ActionTypes.SHOW_RESULT
      },
      {
        text: intl.formatMessage({
          id: 'CommandPostMortemContainer.returnToLobby'
        }),
        type: ActionTypes.RETURN_TO_LOBBY
      }
    ]
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handlePostChat: kind => text => {
    dispatch(
      postChat({
        kind,
        text
      })
    )
  }
})
const CommandPostMortemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandPostMortem)

export default CommandPostMortemContainer
