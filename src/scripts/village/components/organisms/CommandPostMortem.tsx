import * as React from 'react'
import CommandNavigation, {Props as CommandNavigationProps} from '../molecules/CommandNavigation'
import CommandInput from '../molecules/CommandInput'
import {Navigation} from '../../constants/ActionTypes'
import {State} from '../../reducers/suggest'
import {village} from '../../types'

export interface StateProps {
  readonly characterLimit: number
  readonly language: village.Language
  readonly navigation: CommandNavigationProps['items']
  readonly suggesttedData: State['data']
}
export interface DispatchProps {
  readonly handleNavigationClick: (type: Navigation) => void
  readonly handlePostChat: (channel: village.InputChannel) => (text: string) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function CommandPostMortem(props: Props) {
  return (
    <>
      <CommandInput
        characterLimit={props.characterLimit}
        handlePostChat={props.handlePostChat(village.InputChannel.postMortem)}
        inputChannel={village.InputChannel.postMortem}
        language={props.language}
        postCount={-1}
        postCountLimit={-1}
        suggesttedData={props.suggesttedData}
      />
      <CommandNavigation
        handleClick={props.handleNavigationClick}
        items={props.navigation}
      />
    </>
  )
}
