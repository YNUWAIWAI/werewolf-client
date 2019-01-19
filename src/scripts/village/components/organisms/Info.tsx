import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import InfoAgent from '../../containers/InfoAgentContainer'
import InfoDay from '../../containers/InfoDayContainer'
import InfoRole from '../../containers/InfoRoleContainer'
import InfoTeam from '../../containers/InfoTeamContainer'

export default function Info() {
  return (
    <div className="info">
      <InfoDay />
      <FormattedMessage
        id="Info.property.agent"
      >
        {
          text =>
            <div
              className="info--property agent"
            >
              {text}
            </div>
        }
      </FormattedMessage>
      <InfoAgent />
      <FormattedMessage
        id="Info.property.role"
      >
        {
          text =>
            <div
              className="info--property role"
            >
              {text}
            </div>
        }
      </FormattedMessage>
      <InfoRole />
      <FormattedMessage
        id="Info.property.team"
      >
        {
          text =>
            <div
              className="info--property team"
            >
              {text}
            </div>
        }
      </FormattedMessage>
      <InfoTeam />
    </div>
  )
}