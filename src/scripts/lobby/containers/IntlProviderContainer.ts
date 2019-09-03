import {IntlProvider, addLocaleData} from 'react-intl'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import {getMessages} from '@i18n/lobby'
import it from 'react-intl/locale-data/it'
import ja from 'react-intl/locale-data/ja'

addLocaleData([... en, ... fr, ... it, ... ja])

const mapStateToProps = (state: ReducerState) => ({
  locale: state.language,
  messages: getMessages(state.language)
})
const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
