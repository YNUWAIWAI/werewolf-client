
import * as en from 'react-intl/locale-data/en'
import * as fr from 'react-intl/locale-data/fr'
import * as it from 'react-intl/locale-data/it'
import * as ja from 'react-intl/locale-data/ja'
import {IntlProvider, addLocaleData} from 'react-intl'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../../../i18n/village'

addLocaleData([... en, ... fr, ... it, ... ja])

const mapStateToProps = (state: ReducerState) => ({
  locale: state.language,
  messages: getMessages(state.language)
})
const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
