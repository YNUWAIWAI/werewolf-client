import * as React from 'react'
import {Description} from '../molecules/Description'
import {Slider} from '../molecules/Slider'

export const Lead: React.FC<{}> = () => (
  <div
    className="la--lead"
  >
    <Slider />
    <Description />
  </div>
)
Lead.displayName = 'Lead'
