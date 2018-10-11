// @flow
import type {Dispatch} from 'redux'
import IntlProvider from './IntlProviderContainer'
import React from 'react'
import type {ReducerState} from '../reducers'
import type {Target} from 'lobby'
import {connect} from 'react-redux'
import {transition} from '../actions'

type StateProps = {
  +content: React$ComponentType<*>
}
type DispatchProps = {
  +transition: Target => void
}
type Props =
  & StateProps
  & DispatchProps
type Action = {type: Target}

function App(props: Props) {
  return (
    <IntlProvider>
      <props.content transition={props.transition} />
    </IntlProvider>
  )
}

const mapStateToProps = (state: ReducerState): StateProps => ({
  content: state.app.content
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
