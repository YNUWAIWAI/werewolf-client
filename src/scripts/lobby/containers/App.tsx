import * as React from 'react'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import {History as H} from 'history'
import IntlProvider from './IntlProviderContainer'
import Modal from './ModalContainer'
import Obfucator from './ObfucatorContainer'
import {Router} from 'react-router-dom'
import Routes from './Routes'

interface Props {
  readonly history: H
}

export default function App(props: Props) {
  return (
    <IntlProvider>
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
      </Router>
    </IntlProvider>
  )
}
