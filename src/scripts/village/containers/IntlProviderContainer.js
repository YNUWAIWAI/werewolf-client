// @flow
import {addLocaleData, IntlProvider} from 'react-intl'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import en from 'react-intl/locale-data/en'
import {getMessages} from '../../../i18n/village'
import ja from 'react-intl/locale-data/ja'

addLocaleData([... en, ... ja])

const mapStateToProps = (state: ReducerState) => ({
  locale: state.language,
  messages: getMessages(state.language)
})
const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
