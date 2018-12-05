// @flow
import Day from '../../containers/DayContainer'
import {FormattedMessage} from 'react-intl'
import InfoAgent from '../../containers/InfoAgentContainer'
import InfoRole from '../../containers/InfoRoleContainer'
import InfoTeam from '../../containers/InfoTeamContainer'
import React from 'react'

export default function Info() {
  return (
    <div className="info">
      <Day />
      <FormattedMessage
        id="Info.property.agent"
      >
        {
          (text: string) =>
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
          (text: string) =>
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
          (text: string) =>
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
