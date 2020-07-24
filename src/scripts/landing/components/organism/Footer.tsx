import * as React from 'react'

const text = 'Copyright © 2020 YNUWAIWAI'

export const Footer: React.FC<{}> = () => (
  <div
    className="la--footer"
  >
    {text}
  </div>
)
Footer.displayName = 'Footer'
