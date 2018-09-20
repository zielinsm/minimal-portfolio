import React from 'react'
import Helmet from 'react-helmet'
const settings = require('../../configuration/settings')

const { site } = settings
const siteUrl = site.url + site.path

const schema = [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: site.shortTitle,
    alternateName: site.fullTitle,
  },
]

const Template = props => {
  const { children } = props
  return (
    <div>
      <Helmet>
        <html lang={site.language} />
        <title>{site.fullTitle}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, maximum-scale=1.0"
        />
        <meta name="description" content={site.description} />
        <meta name="image" content={site.cover} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <style>{`body { background-color: ${
          settings.appearance.backgroundColor
        }; }`}</style>
      </Helmet>
      {children()}
    </div>
  )
}

export default Template
