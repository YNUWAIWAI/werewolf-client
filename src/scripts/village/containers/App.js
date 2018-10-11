// @flow
import Activity from './ActivityContainer'
import Command from './CommandContainer'
import HideButton from './HideButtonContainer'
import Info from '../components/organisms/Info'
import IntlProvider from './IntlProviderContainer'
import Modal from './ModalContainer'
import Obfucator from './ObfucatorContainer'
import React from 'react'
import Result from './ResultContainer'

export default function App() {
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
