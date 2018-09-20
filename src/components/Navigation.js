import React from 'react'

import styles from './Navigation.module.css'

function renderLink(element, index) {
  if (element.value) {
    return (
      <a href={element.value} className={styles.link} key={index}>
        {element.label}
      </a>
    )
  }
}

const Navigation = props => {
  const { links } = props
  const informationArr = [
    {
      label: 'Mail',
      value: links.mail,
    },
    {
      label: 'Twitter',
      value: links.twitter,
    },
    {
      label: 'Facebook',
      value: links.facebook,
    },
    {
      label: 'LinkedIn',
      value: links.linkedIn,
    },
    {
      label: 'Github',
      value: links.github,
    },
  ]

  return (
    <div className={styles.index}>
      {informationArr.map((el, index) => renderLink(el, index))}
    </div>
  )
}

export default Navigation
