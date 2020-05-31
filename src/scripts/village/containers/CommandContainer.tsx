import * as React from 'react'
import {
  Command as Component,
  StateProps
} from '../components/organisms/Command'
import {CommandGraveContainer} from './CommandGraveContainer'
import {CommandInputBoxContainer} from './CommandInputBoxContainer'
import {CommandPostMortemContainer} from './CommandPostMortemContainer'
import {CommandSelectionContainer} from './CommandSelectionContainer'
import {Content} from '../reducers/command'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  switch (state.command.content) {
    case Content.CommandGrave:
      return {
        content: <CommandGraveContainer />,
        hide: state.hideButton.hide
      }
    case Content.CommandInputBox:
      return {
        content: <CommandInputBoxContainer />,
        hide: state.hideButton.hide
      }
    case Content.CommandPostMortem:
      return {
        content: <CommandPostMortemContainer />,
        hide: state.hideButton.hide
      }
    case Content.CommandSelection:
      return {
        content: <CommandSelectionContainer />,
        hide: state.hideButton.hide
      }
    default:
      throw Error('Unexpected value')
  }
}

export const CommandContainer = connect(
  mapStateToProps
)(Component)
