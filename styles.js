
import ms from 'simple-modular-scale'
import clrs from 'colors.css'
import Color from 'color'

const scale = ms({ base: 8, ratios: [9/8, 4/3, 4/3] })

export default {
  fonts: {
    Garamond: 'Garamond, serif',
    Baskerville: 'Baskerville, "Baskerville Old Face", serif',
    'Hoefler Text': '"Hoefler Text", serif',
    Times: 'Times, serif',
    Georgia: 'Georgia, serif',
    Helvetica: '"Hevletica Neue", Helvetica, sans-serif',
  },
  h1: scale[6],
  h2: scale[5],
  h3: scale[4],
  h4: scale[3],
  h5: scale[2],
  h6: scale[1],
  hr: {
    marginTop: scale[3],
    marginBottom: scale[3],
    border: 0,
    borderBottom: '1px solid ' + Color('#000').alpha(3/16).rgbString()
  },
  toolbarHeight: 256,
  scale: scale,
  blue: clrs.blue,
  darken: [
    Color('#000').alpha(1/16).rgbString(),
    Color('#000').alpha(2/16).rgbString(),
    Color('#000').alpha(3/16).rgbString(),
    Color('#000').alpha(4/16).rgbString(),
  ]
}
