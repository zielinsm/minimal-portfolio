import React from 'react'

import styles from './List.module.css'

const Project = props => {
  const { html, frontmatter } = props.project.node

  const renderCover = cover => {
    if (cover) {
      return <img src={cover.childImageSharp.sizes.src} alt="Project cover" />
    }
  }

  return (
    <div className={styles.project}>
      {renderCover(frontmatter.cover)}
      <h3 className={styles.title}>{frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const List = props => {
  const { projects } = props

  return (
    <div className={styles.index}>
      <h5 className={styles.heading}>Projects</h5>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default List
