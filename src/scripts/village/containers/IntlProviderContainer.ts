import {IntlProvider} from 'react-intl'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../i18n'
import {village} from '../types'

interface StateProps {
  locale: village.Language
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
