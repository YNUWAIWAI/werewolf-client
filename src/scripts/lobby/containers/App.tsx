import * as React from 'react'
import IntlProvider from './IntlProviderContainer'
import Obfucator from './ObfucatorContainer'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

interface StateProps {
  readonly content: React.ComponentType
}

const mapStateToProps = (state: ReducerState): StateProps => ({
  content: state.app.content
})

export default connect(
  mapStateToProps
)(
  function App(props: StateProps) {
    return (
      <IntlProvider>
        <props.content />
        <Obfucator />
      </IntlProvider>
    )
  }
)
