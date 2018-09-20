import React from 'react'

import Container from './Container.module.css'

export default ({ children }) => (
  <div className={Container.index}>
    <div className={Container.content}>{children}</div>
  </div>
)
