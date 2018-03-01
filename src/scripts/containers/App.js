import Activity from './ActivityContainer'
import Command from './CommandContainer'
import HideButton from './HideButtonContainer'
import Info from '../components/Info'
import Modal from '../components/Modal'
import Obfucator from '../containers/ObfucatorContainer'
import React from 'react'
import Result from '../containers/ResultContainer'

export default function App() {
  return (
    <React.Fragment>
      <Info />
      <Activity />
      <Command />
      <HideButton />
      <Modal />
      <Result />
      <Obfucator />
    </React.Fragment>
  )
}
