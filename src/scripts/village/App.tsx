import * as React from 'react'
import Chat from './containers/ChatContainer'
import Command from './containers/CommandContainer'
import HideButton from './containers/HideButtonContainer'
import Info from './components/organisms/Info'
import IntlProvider from './containers/IntlProviderContainer'
import Modal from './containers/ModalContainer'
import Obfucator from './containers/ObfucatorContainer'
import Prediction from './containers/PredictionContainer'
import Result from './containers/ResultContainer'
import Theme from './containers/ThemeContainer'

export default function App() {
  return (
    <IntlProvider>
      <Theme>
        <div className="vi--grid">
          <Info />
          <Chat />
          <Prediction />
          <Command />
          <HideButton />
          <Modal />
          <Result />
          <Obfucator />
        </div>
        <div className="vi--background" />
      </Theme>
    </IntlProvider>
  )
}
