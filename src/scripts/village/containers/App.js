// @flow
import Activity from './ActivityContainer'
import Command from './CommandContainer'
import HideButton from './HideButtonContainer'
import Info from '../components/Info'
import Modal from './ModalContainer'
import Obfucator from './ObfucatorContainer'
import React from 'react'
import Result from './ResultContainer'

export default function App() {
  return (
    <div className="app">
      <Info />
      <Activity />
      <Command />
      <HideButton />
      <Modal />
      <Result />
      <Obfucator />
    </div>
  )
}
