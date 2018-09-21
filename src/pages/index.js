import React from "react"
import Link from "gatsby-link"

const settings = require("../../configuration/settings")

import Container from "../components/Container"
import Navigation from "../components/Navigation"
import Header from "../components/Header"
import List from "../components/List"

const IndexPage = props => {
  const aboutData = props.data.about.edges[0]
  const projectsData = props.data.projects.edges

  return (
    <Container>
      <Navigation links={settings.information} />
      <div style={{ maxWidth: "500px" }}>
        <Header about={aboutData} />
        <List projects={projectsData} />
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
query IndexQuery {
  about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about.md/"}}) {
    edges {
      node {
        html
      }
    }
  }
  projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/content/projects)/.*\\.md$/"}}, sort: { order: DESC, fields: [frontmatter___title] }) {
    edges {
      node {
        html
        frontmatter {
          title
          cover {
            childImageSharp {
              sizes(maxWidth: 650, quality: 95) {
                src
              }
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
