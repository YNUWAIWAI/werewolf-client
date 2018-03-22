// @flow
import Command, {type StateProps} from '../components/Command'
import CommandInputBox from './CommandInputBoxContainer'
import CommandSelection from './CommandselectionContainer'
import React from 'react'
import type {ReducerState} from '../reducers'
import {SELECTION_PHASE} from '../constants/Phase'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => ({
  content: SELECTION_PHASE.includes(state.base.phase) ? <CommandSelection /> : <CommandInputBox />,
  hide: state.hideButton.hide
})
const CommandContainer = connect(
  mapStateToProps
)(Command)

export default CommandContainer
