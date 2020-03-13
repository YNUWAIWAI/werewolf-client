import * as React from 'react'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import {History as H} from 'history'
import IntlProvider from './containers/IntlProviderContainer'
import Modal from './containers/ModalContainer'
import MuteButton from './containers/MuteButtonContainer'
import Obfucator from './containers/ObfucatorContainer'
import {Router} from 'react-router-dom'
import Routes from './containers/Routes'
import Theme from './containers/ThemeContainer'
import Video from './containers/VideoContainer'

interface Props {
  readonly history: H
}

export default function App(props: Props) {
  return (
    <IntlProvider>
      <Theme>
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
          <Obfucator />
          <Modal />
          <MuteButton />
          <Video />
        </Router>
      </Theme>
    </IntlProvider>
  )
}
