import * as React from 'react'

export const MainContent: React.FC<{}> = props => (
  <div className="lo--main-content">
    {props.children}
  </div>
)
MainContent.displayName = 'MainContent'
