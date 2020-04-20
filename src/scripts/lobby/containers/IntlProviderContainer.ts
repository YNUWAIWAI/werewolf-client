import {
  IntlConfig,
  IntlProvider
} from 'react-intl'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../i18n'
import {lobby} from '../types'

interface StateProps extends Partial<IntlConfig> {
  locale: lobby.Language
  messages: {
    [key: string]: string
  }
}

const mapStateToProps = (state: ReducerState): StateProps => ({
  locale: state.language,
  messages: getMessages(state.language)
})
const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
