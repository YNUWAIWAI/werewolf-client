import * as React from 'react'
import Activity from './containers/ActivityContainer'
import Command from './containers/CommandContainer'
import HideButton from './containers/HideButtonContainer'
import Info from './components/organisms/Info'
import IntlProvider from './containers/IntlProviderContainer'
import Modal from './containers/ModalContainer'
import Obfucator from './containers/ObfucatorContainer'
import Result from './containers/ResultContainer'
import Theme from './containers/ThemeContainer'

export default function App() {
  return (
    <IntlProvider>
      <Theme>
        <div className="vi--app">
          <Info />
          <Activity />
          <Command />
          <HideButton />
          <Modal />
          <Result />
          <Obfucator />
        </div>
      </Theme>
    </IntlProvider>
  )
}
