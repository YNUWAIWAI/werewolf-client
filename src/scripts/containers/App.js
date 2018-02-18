import Activity from '../components/Activity'
import Command from '../components/Command'
import HideButton from '../components/HideButton'
import Info from '../components/Info'
import Modal from '../components/Modal'
import Obfucator from '../components/Obfucator'
import React from 'react'
import Result from '../components/Result'

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
