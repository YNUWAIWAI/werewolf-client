// @flow
import React, {Fragment} from 'react'
import CommandInput from './CommandInput'
import CommandNavigation from '../containers/CommandNavigationContainer'
import type {NavigationType} from 'village'

type Props = {
  +handlePostChat: string => string => void,
  +navigation: {
    +text: string,
    +type: NavigationType
  }[]
}

export default function CommandPostMortem(props: Props) {
  return (
    <Fragment>
      <CommandInput handlePostChat={props.handlePostChat('postMortem')} kind="postMortem" />
      <CommandNavigation items={props.navigation} />
    </Fragment>
  )
}
