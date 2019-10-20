import {IntlProvider} from 'react-intl'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../i18n'

const mapStateToProps = (state: ReducerState) => ({
  locale: state.language,
  messages: getMessages(state.language)
})
const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
