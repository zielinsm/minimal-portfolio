import React from 'react'
const settings = require('../../configuration/settings')

import styles from './Header.module.css'

const { site } = settings

const Header = props => {
  const aboutContent = props.about.node.html

  return (
    <div className={styles.index}>
      <h1>{site.shortTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </div>
  )
}

export default Header
