import * as React from 'react'
import Activity from './ActivityContainer'
import Command from './CommandContainer'
import HideButton from './HideButtonContainer'
import Info from '../components/organisms/Info'
import IntlProvider from './IntlProviderContainer'
import Modal from './ModalContainer'
import Obfucator from './ObfucatorContainer'
import Result from './ResultContainer'

export default function App(): JSX.Element {
  return (
    <IntlProvider>
      <div className="app">
        <Info />
        <Activity />
        <Command />
        <HideButton />
        <Modal />
        <Result />
        <Obfucator />
      </div>
    </IntlProvider>
  )
}
