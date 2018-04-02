// @flow
import type {Dispatch} from 'redux'
import React from 'react'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type StateProps = {
  +content: React$ComponentType<*>
}
type DispatchProps = {
  +transition: string => void => void
}
type Props =
  & StateProps
  & DispatchProps
type Action = {type: string}

function App(props: Props) {
  return <props.content transition={props.transition} />
}

const mapStateToProps = (state: ReducerState): StateProps => ({
  content: state.app.content
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => () => {
    dispatch({
      type: target
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
