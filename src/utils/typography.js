import Typography from 'typography'
import settings from '../../configuration/settings'

const { font } = settings.appearance

const options = {
  title: 'Minimal',
  baseFontSize: font.baseSize,
  baseLineHeight: font.baseLineHeight,
  headerColor: font.headerColor,
  bodyColor: font.bodyColor,
  blockMarginBottom: 0.2,
  scaleRatio: 2.5,
  headerWeight: font.headerWeight,
  bodyWeight: font.bodyWeight,
  headerFontFamily: [font.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [font.bodyFontFamily, 'serif'],
  googleFonts: [
    {
      name: font.headerFontFamily,
      styles: [`${font.headerWeight}`],
    },
    {
      name: font.bodyFontFamily,
      styles: [`${font.bodyWeight}`],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontSize: '1.75em',
    },
    a: {
      color: font.bodyColor,
      textDecoration: 'none',
      borderBottom: '2px solid gray',
      transition: 'color 0.5s ease',
    },
    p: {
      textAlign: 'justify',
    },
    blockquote: {
      padding: '0 10px',
      borderLeft: '4px solid gray',
    },
  }),
}

const typography = new Typography(options)

export default typography
