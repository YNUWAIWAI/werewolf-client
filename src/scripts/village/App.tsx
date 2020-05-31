import * as React from 'react'
import {ChatContainer as Chat} from './containers/ChatContainer'
import {CommandContainer as Command} from './containers/CommandContainer'
import {HideButtonContainer as HideButton} from './containers/HideButtonContainer'
import {Info} from './components/organisms/Info'
import {IntlProviderContainer as IntlProvider} from './containers/IntlProviderContainer'
import {ModalContainer as Modal} from './containers/ModalContainer'
import {ObfucatorContainer as Obfucator} from './containers/ObfucatorContainer'
import {PredictionContainer as Prediction} from './containers/PredictionContainer'
import {ResultContainer as Result} from './containers/ResultContainer'
import {ThemeContainer as Theme} from './containers/ThemeContainer'

export const App: React.FC<{}> = () => (
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
App.displayName = 'App'
