import * as React from 'react'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import {History as H} from 'history'
import {IntlProviderContainer} from './containers/IntlProviderContainer'
import {ModalContainer} from './containers/ModalContainer'
import {MuteButtonContainer} from './containers/MuteButtonContainer'
import {ObfucatorContainer} from './containers/ObfucatorContainer'
import {Router} from 'react-router-dom'
import {Routes} from './containers/Routes'
import {ThemeContainer} from './containers/ThemeContainer'
import {VideoContainer} from './containers/VideoContainer'

interface Props {
  readonly history: H
}

export const App: React.FC<Props> = props => (
  <IntlProviderContainer>
    <ThemeContainer>
      <Router history={props.history}>
        <TransitionGroup
          component={null}
        >
          <CSSTransition
            appear
            classNames="lo--app--transition"
            exit={false}
            timeout={100}
            unmountOnExit
          >
            <Routes />
          </CSSTransition>
        </TransitionGroup>
        <ObfucatorContainer />
        <ModalContainer />
        <MuteButtonContainer />
        <VideoContainer />
      </Router>
    </ThemeContainer>
  </IntlProviderContainer>
)
App.displayName = 'App'
